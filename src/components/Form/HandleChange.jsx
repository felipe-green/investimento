const HandleChange = (name, event) => {
  let { value } = event.target;

  if (event.target.type === "checkbox") {
    value = event.target.checked;
  }

  return {
    name,
    value,
  };
};
export default HandleChange;
