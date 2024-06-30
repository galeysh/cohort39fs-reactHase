import SimponsCard from "../../components/SimpomsCard/SimpomsCard";
import Button from "../../components/Button/Button";
import "./styles.css";

// const add = (a, b) => {
//   console.log(a + b);
// };

// add(1, 3);
// add(5, 5);
// add(3, 3);
// add(4, 4);

function Lesson03() {
  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Safety Inspector",
    hobby: "beer Duff",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };

  const margeSimpson = {
    firstName: "Marge",
    lastName: "Simpson",
    job: "No job",
    hobby: "cooking",
    avatar: "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
  };

  const bartSimpson = {
    firstName: "Bart",
    lastName: "Simpson",
    job: "No job",
    hobby: "Skating",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
  };

  return (
    <div className="lesson03-wrapper">
      {/* <SimponsCard
        firstName={homerSimpson.firstName}
        lastName={homerSimpson.lastName}
        hobby={homerSimpson.hobby}
        job={homerSimpson.job}
        avatar={homerSimpson.avatar}
      />
      <SimponsCard
        firstName={margeSimpson.firstName}
        lastName={margeSimpson.lastName}
        hobby={margeSimpson.hobby}
        job={margeSimpson.job}
        avatar={margeSimpson.avatar}
      />
      <SimponsCard
        avatar={bartSimpson.avatar}
        firstName={bartSimpson.firstName}
        lastName={bartSimpson.lastName}
        job={bartSimpson.job}
        hobby={bartSimpson.hobby}
      /> */}
      <SimponsCard userData={homerSimpson} />
      <SimponsCard userData={margeSimpson} />
      <SimponsCard userData={bartSimpson} />
      {/* Children example */}
      {/* <Button>Send data</Button> */}
      <Button />
      <Button buttonName={"Update data"} />
    </div>
  );
}

export default Lesson03;
