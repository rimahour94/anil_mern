import PropsHandlingChild from "./PropsHandlingChild";
function PropsHandling() {
  let userObj = {
    roll_no: 121,
    city: "Noida",
  };

  return (
    <>
      <PropsHandlingChild name="Ritesh" obj={userObj} />
      <h2>Props PropsHandling</h2>
    </>
  );
}
export default PropsHandling;
