import { Transition } from "@headlessui/react";
import { Form, Formik } from "formik";
import {
  Button,
  Navbar,
  ScrollToTop,
  TextField,
  SwitchButton,
  Card,
} from "../components";
import { useNewTitle, userEditCourses, useSettings } from "../hooks";
import { EditCourseCard } from '../components/ui/card/editCourse/EditCourseCard';

export const SettingsPage = () => {
  const { formInitialState, editBasicInfo, changepassword, setChangepassword } =
    useSettings();

  const { aprovedCourses, unaprovedCourses, moveToAproved, moveToUnaproved } = userEditCourses();

  useNewTitle("Configuración");

  return (
    <main className="bg-white dark:bg-dark transition-colors min-h-screen anim">
      <ScrollToTop />
      <Navbar />
      <Formik initialValues={formInitialState} onSubmit={editBasicInfo}>
        <Form className="w-4/6 mx-auto mt-5 pb-16">
          <h1 className="text-xl font-bold">Editar datos</h1>
          <div className="flex flex-col gap-y-4">
            <TextField placeholder="Juan" name="names" label="Nombre" />
            <TextField placeholder="Pérez" name="lastnames" label="Apellidos" />
            <TextField
              placeholder="juan@gmail.com"
              name="email"
              label="Email"
            />

            <div className="flex justify-between items-center">
              <label className="text-xs md:text-sm my-3 text-primary-light-2 dark:text-white">
                {" "}
                Cambiar contraseña{" "}
              </label>
              <SwitchButton
                enabled={changepassword}
                setEnabled={setChangepassword}
              />
            </div>

            <Transition
              show={changepassword}
              as="div"
              className={`${changepassword ? "inline-block" : "hidden"
                }  flex flex-col gap-y-4`}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <TextField
                placeholder="Contraseña anterior"
                name="oldPassword"
                type="password"
                label="Contraseña anterior"
              />
              <TextField
                placeholder="Nueva contraseña"
                name="newPassword"
                type="password"
                label="Nueva contraseña"
              />
              <TextField
                placeholder="Confirmar nueva contraseña"
                name="confirmNewPassword"
                type="password"
                label="Confirmar nueva contraseña"
              />
            </Transition>
            <Button variant="secondary" type="submit">
              Guardar cambios
            </Button>
          </div>
        </Form>
      </Formik>
      <section className="w-5/6 mx-auto mt-5 pb-16 flex flex-col gap-y-5 ">
        <h1 className="text-xl font-bold ">Editar cursos aprobados</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-4 gap-x-2 gap-y-5">
          <div>
            <h2 className="text-lg font-semibold text-center mb-3">Cursos no aprobados</h2>
            {
              unaprovedCourses.map((course) => (
                <EditCourseCard onClick={moveToAproved} key={course.idCourse} type="unaproved" course={course} />
              ))
            }
            {
              unaprovedCourses.length === 0 && (<p className="text-center my-5 font-normal">No hay cursos no aprobados</p>)
            }
          </div>
          <div>
            <h2 className="text-lg font-semibold text-center mb-3">Cursos aprobados</h2>
            {
              aprovedCourses.map((course) => (
                <EditCourseCard onClick={moveToUnaproved} key={course.idCourse} type="aproved" course={course} />
              ))
            }
            {
              aprovedCourses.length === 0 && (<p className="text-center my-5 font-normal">No hay cursos aprobados</p>)

            }
          </div>
        </div>
      </section>
    </main>
  );
};
