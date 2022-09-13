import { ApiGetAprovedCoursesResponse, yousacApi } from "../api"
import { useAuthStore } from "./useAuthStore"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ApiGetUnaprovedCoursesResponse, CourseInterface } from '../api/api.types';
import toast from 'react-hot-toast';

export const userEditCourses = () => {

    const { user, status } = useAuthStore();
    const navigate = useNavigate();

    const [aprovedCourses, setaprovedCourses] = useState<CourseInterface[]>([])
    const [unaprovedCourses, setUnaprovedCourses] = useState<CourseInterface[]>([])

    if (status === 'not-authenticated') {
        navigate('/login');
    }

    const getAprovedCourses = async () => {

        const { data } = await yousacApi.get<ApiGetAprovedCoursesResponse>(`/course/aproved/${user.idUser}`)
        setaprovedCourses(data.aprovedCourses)
    }

    const getUnaprovedCourses = async () => {

        const { data } = await yousacApi.get<ApiGetUnaprovedCoursesResponse>(`/course/unaproved`)
        setUnaprovedCourses(data.unaprovedCourses)
    }

    const moveToAproved = async (course: CourseInterface) => {
        try {
            const { data } = await yousacApi.post(`/user/aprovedCourse`, {
                coursesIds: [course.idCourse],
            })

            setaprovedCourses((prev) => [...prev, course])
            setUnaprovedCourses((prev) => prev.filter((c) => c.idCourse !== course.idCourse))

            toast.success('Marcado como curso aprobado')
        } catch (error) {
            console.log(error)
            toast.error('Hubo un error al marcar como aprobado')
        }
    }

    const moveToUnaproved = async (course: CourseInterface) => {
        try {
            const { data } = await yousacApi.post(`/user/unaprovedCourse`, {
                coursesIds: [course.idCourse],
            })
            setUnaprovedCourses((prev) => [...prev, course])
            setaprovedCourses((prev) => prev.filter((c) => c.idCourse !== course.idCourse))

            toast.success('Marcado como curso no aprobado')
        } catch (error) {
            console.log(error)
            toast.error('Hubo un error al marcar como no aprobado')
        }
    }

    useEffect(() => {
        getAprovedCourses()
        getUnaprovedCourses()
    }, [])


    return {
        aprovedCourses,
        unaprovedCourses,
        moveToAproved,
        moveToUnaproved
    }

}