const Form = ({ datosForm, guardarDatosInput, enviarOrden }) => {
  return (
    <form onSubmit={enviarOrden}>
      <label htmlFor="nombre">Nombre: </label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={datosForm.nombre}
        onChange={guardarDatosInput}
        required
      />

      <label htmlFor="celular">Celular: </label>
      <input
        type="number"
        id="celular"
        name="celular"
        value={datosForm.celular}
        onChange={guardarDatosInput}
        required
      />

      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        name="email"
        value={datosForm.email}
        onChange={guardarDatosInput}
        required
      />

      <label htmlFor="emailRepetido">Repetir Email: </label>
      <input
        type="email"
        id="emailRepetido"
        name="emailRepetido"
        value={datosForm.emailRepetido}
        onChange={guardarDatosInput}
        required
      />

      <button type="submit">Enviar orden</button>
    </form>
  );
};
export default Form;
