import { dmSerif } from '@/utils/fonts'

export default function Page () {
  return (
    <main className='p-[16px] md:px-[60px] lg:px-[120px] w-full'>
      <h1 className={`${dmSerif.className} text-xl2 font-normal md:text-xl3 text-textBlack`}>Política de Privacidad</h1>
      <section id='masonry' className='w-full flex flex-wrap justify-center gap-10 lg:gap-x-20 mt-10'>
        <div className='max-w-[549px]'>
          <h4 className='text-textGray text-sm font-bold mb-2'>1. Información Personal Recopilada</h4>
          <p className='text-xs bg-softWhite rounded-[15px] p-[12px] md:p-[20px] md:text-sm'>Recopilamos información personal proporcionada voluntariamente por los usuarios, que puede incluir, entre otros, nombres, direcciones de correo electrónico, direcciones físicas y números de teléfono. </p>
        </div>

      <div className='max-w-[550px]'>
          <h4 className='text-textGray text-sm font-bold mb-2'>2. Uso de la información</h4>
          <p className='text-xs bg-softWhite rounded-[15px] p-[12px] md:p-[20px] md:text-sm'>
              Utilizamos la información personal recopilada para los siguientes propósitos:
              <ul className='list-disc ml-10'>
                <li>Procesar pedidos y transacciones.</li>
                <li>Enviar confirmaciones de pedidos y actualizaciones de envío.</li>
                <li>Proporcionar información sobre productos y promociones.</li>
                <li>Mejorar nuestros productos y servicios.</li>
                <li>Responder a consultas y proporcionar soporte al cliente.</li>
                <li>Cumplir con obligaciones legales y normativas.</li>
              </ul>
          </p>
        </div>

        <div className='max-w-[549px]'>
          <h4 className='text-textGray text-sm font-bold mb-2'>3. Consentimiento</h4>
          <p className='text-xs bg-softWhite rounded-[15px] p-[12px] md:p-[20px] md:text-sm'>RAl proporcionar su información personal, los usuarios otorgan su consentimiento para que Farmavet la utilice de acuerdo con esta política de privacidad. </p>
        </div>

        <div className='max-w-[550px]'>
          <h4 className='text-textGray text-sm font-bold mb-2'>4. Seguridad de Datos</h4>
          <p className='text-xs bg-softWhite rounded-[15px] p-[12px] md:p-[20px] md:text-sm'>Implementamos medidas de seguridad técnicas y organizativas para proteger la información personal de los usuarios contra accesos no autorizados, pérdidas, alteraciones y divulgaciones no autorizadas. </p>
        </div>

        <div className='max-w-[550px]'>
          <h4 className='text-textGray text-sm font-bold mb-2'>5. Compartir Información</h4>
          <p className='text-xs bg-softWhite rounded-[15px] p-[12px] md:p-[20px] md:text-sm'>No compartiremos información personal con terceros, excepto cuando sea necesario para cumplir con obligaciones legales, procesar transacciones o proporcionar servicios relacionados con el ecommerce. </p>
        </div>

        <div className='max-w-[550px]'>
          <h4 className='text-textGray text-sm font-bold mb-2'>6. Derechos de los usuarios</h4>
          <p className='text-xs bg-softWhite rounded-[15px] p-[12px] md:p-[20px] md:text-sm'>Los usuarios tienen el derecho de acceder, corregir, modificar o eliminar su información personal. Para ejercer estos derechos o realizar preguntas sobre la privacidad, pueden ponerse en contacto con nosotros a través de farmavettt@gmail.com. </p>
        </div>

        <div className='max-w-[550px]'>
          <h4 className='text-textGray text-sm font-bold mb-2'>7. Cookies</h4>
          <p className='text-xs bg-softWhite rounded-[15px] p-[12px] md:p-[20px] md:text-sm'>Utilizamos cookies para mejorar la experiencia del usuario. Los usuarios pueden gestionar las preferencias de cookies a través de la configuración de su navegador. </p>
        </div>

        <div className='max-w-[550px]'>
          <h4 className='text-textGray text-sm font-bold mb-2'>8. Cambios en la política</h4>
          <p className='text-xs bg-softWhite rounded-[15px] p-[12px] md:p-[20px] md:text-sm'>Farmavet se reserva el derecho de actualizar esta política de privacidad en cualquier momento. Las actualizaciones se publicarán en nuestro sitio web. </p>
        </div>

        <div className='max-w-[550px]'>
          <h4 className='text-textGray text-sm font-bold mb-2'>9. Jurisdicción y Ley Aplicable</h4>
          <p className='text-xs bg-softWhite rounded-[15px] p-[12px] md:p-[20px] md:text-sm'>Esta política de privacidad se rige por las leyes de la República Argentina. Cualquier disputa relacionada con la privacidad se resolverá en los tribunales competentes de la jurisdicción. </p>
        </div>

        <div className='max-w-[550px]'>
          <h4 className='text-textGray text-sm font-bold mb-2'>10. Contacto</h4>
          <p className='text-xs bg-softWhite rounded-[15px] p-[12px] md:p-[20px] md:text-sm'>Los usuarios tienen el derecho de acceder, corregir, modificar o eliminar su información personal. Para ejercer estos derechos o realizar preguntas sobre la privacidad, pueden ponerse en contacto con nosotros a través de farmavettt@gmail.com. </p>
        </div>
      </section>
    </main>
  )
}
