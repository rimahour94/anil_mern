function PropsHandlingChild(props) {
  console.log(props);
  return (
    <>
      <h2>Props Child {props.name} </h2>
      <p>City ::{props.obj.city}</p>
    </>
  );
}
export default PropsHandlingChild;
