import Button from "./Button";
export default function Aside() {
  const buttons = [
    {
      id: 1,
      children: (<p style={{ padding: "0", margin: "0" }}>Most Viewed</p>)
    },
    {
      id: 2,
      children:
        <div>
          Beautiful flowers
          <img
            style={{ width: "100%" }}
            alt="Beautiful teal flowers"
            src="images.jpeg"
          />
        </div>

    },
    {
      id: 3,
      children: " like 😁"
    }
  ];
  const button = buttons.map(button => {
    return <Button key="buttonData.id">{button.children}</Button>;
  });
  return (
    <aside
      style={{
        padding: "5%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "2%",
        border: "3px solid teal"
      }}
    >
      {button}
    </aside>
  );
}
