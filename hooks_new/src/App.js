import React from "react";
import style from "./App.module.css";
// import LessText from "./components/LessText/LessText";
// import Input from "./components/InputExample/Input";
// import ExampleEffect from "./components/ExampleEffect/ExampleEffect";
import ExampleReducer from "./components/ExampleReducer/ExampleReducer";
// import ToDoList from "./components/ToDoList/ToDoList";

const App = () => {

  return (
    <div className={style.app}>

      {/* <LessText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel quasi iure quisquam omnis dolore iste beatae repudiandae voluptas, laborum voluptatum libero consectetur minima. Perferendis nemo inventore, provident explicabo accusantium tempora incidunt maiores cupiditate autem. Ullam obcaecati ea molestias maiores quidem fugit corporis ab labore corrupti. Quia accusantium optio adipisci totam quos inventore, atque rerum possimus temporibus similique voluptate facilis voluptatum, aut ullam maiores delectus aspernatur error quae praesentium, voluptas magnam ipsa accusamus. Consequatur deleniti nisi quos cupiditate voluptates odio aperiam quidem sequi sapiente hic libero, eligendi fuga fugiat nostrum error ratione sunt labore repellendus? " /> */}

      {/* <Input /> */}

      {/* <ExampleEffect /> */}

      <ExampleReducer />

      {/* <ToDoList /> */}
    </div>
  );
};

export default App;
