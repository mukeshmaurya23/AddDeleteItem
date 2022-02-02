import Card from "./UI/Card";

import styles from "./CourseList.module.css";
//import Button from "./UI/Button";
//import CourseGoalItem from "./CourseGoalItem";
const CourseList = (props) => {
  return (
    <Card className={styles.users}>
      <ul className={styles.users}>
        {props.users.map((user) => (
          <li
            onClick={() => props.onDeleteItem(user.id)}
            key={user.id}
            id={user.id}
          >
            {user.name}({user.age} years old)
            {/* <Button type="button" onClick={() => props.onDeleteItem(user.id)}>
              Remove
            </Button> */}
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default CourseList;
