import CourseForm from "./Components/CourseForm/CourseForm";
import CourseList from "./Components/CourseForm/CourseList";
import { useState } from "react";

const App = () => {
  const [userList, setuserList] = useState([]);
  //here onAddForm handler take two parameter because we have to input box to add or display on screen dynamically
  //so it take 2 argumnets uName, uAge and depend on prev state its first copy value through spread opeartor
  // and taking object {and append value there}
  const onAddFormHandler = (uName, uAge) => {
    setuserList((prevState) => {
      return [
        ...prevState,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };
  // const deleteItemHandler = (goalId) => {
  //   console.log(goalId);
  //   setuserList((prevGoals) => {
  //     const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
  //     return updatedGoals;
  //   });
  // };
  function deleteItemHandler(id) {
    const newList = userList.filter((item) => item.id !== id);
    setuserList(newList);
  }
  return (
    <div>
      <CourseForm onAddForm={onAddFormHandler} />
      <CourseList users={userList} onDeleteItem={deleteItemHandler} />
    </div>
  );
};

export default App;
