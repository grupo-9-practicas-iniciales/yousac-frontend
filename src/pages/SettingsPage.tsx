import { Form, Formik } from 'formik'
import { Button, Navbar, ScrollToTop, TextField } from '../components'
import { SwitchButton } from '../components/ui/switch/SwitchButton';
import { useSettings } from '../hooks/useSettings';

export const SettingsPage = () => {

    const { formInitialState, editBasicInfo, changepassword, setChangepassword } = useSettings();

    return (
        <div className="bg-white dark:bg-dark transition-colors min-h-screen">
            <ScrollToTop />
            <Navbar />
            <Formik initialValues={formInitialState} onSubmit={editBasicInfo}>
                <Form className='w-5/6 mx-auto mt-5'>
                    <h1 className='text-xl font-bold'>Editar datos</h1>
                    <div className='flex flex-col gap-y-4'>
                        <TextField placeholder='Juan' name='names' label='Nombre' />
                        <TextField placeholder='Pérez' name='lastnames' label='Apellidos' />
                        <TextField placeholder='juan@gmail.com' name='email' label='Email' />

                        <div className='flex justify-between items-center'>
                            <label className='text-xs md:text-sm my-3 text-primary-light-2 dark:text-white'> Cambiar contraseña </label>
                            <SwitchButton enabled={changepassword} setEnabled={setChangepassword} />
                        </div>

                        <div className={`${changepassword ? 'inline-block' : 'hidden'}  flex flex-col gap-y-4`}>
                            <TextField placeholder="Contraseña anterior" name='oldPassword' type='password' label='Contraseña anterior' />
                            <TextField placeholder="Nueva contraseña" name='newPassword' type='password' label='Nueva contraseña' />
                            <TextField placeholder="Confirmar nueva contraseña" name='confirmNewPassword' type='password' label='Confirmar nueva contraseña' />
                        </div>

                        <Button variant='tertiary' type='submit'>
                            Guardar cambios
                        </Button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
