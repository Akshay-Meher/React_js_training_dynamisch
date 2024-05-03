import React from 'react';
import "./App.css"
import Session10 from './components/L10_Logical_Filters_rendring/Session10';
// import Arrays from './components/L4_Props_Drilling_UseState/Arrays';
import Session9 from './components/L9_List_&_Keys_Rendering/Session9';
import Session11 from './components/L11_Todo_List/Session11';
import Session12 from './components/L12_13_Form_handling/Session12';
// import Counter from "../src/components/L1_LifeCycle_Class_Comp/Ass1/Counter"
import Session4 from './components/L4_Props_Drilling_UseState/Session4';
import Session5 from './components/L5_useEffect_state_vs_props/Session5';
import Session6 from './components/L6_useEffect_task_revise/Session6';
import Events from './components/L7_L8_Events/Events';
import Session14 from './components/L14_15_hookes/Session14';
import Session16 from './components/L16_Axios_Fetch/Session16';
import Session17Router from './components/L17_Router_DOM/Session17Router';
// import ParentCard from './components/L3_children_callBack/Child_to_parent/ParentCard';
import LearnUseState from './components/L3_children_callBack/useState/LearnUseState';
// import Test from './components/1_LifeCycle/Test';
// import Counter from './components/Counter';
// import Task2 from './components/1_LifeCycle/Task2';
import Parent from './components/L2_jsx_Props-valid/Parent';
import ParentComponent from './components/L3_children_callBack/Props_children/ParentComponent';
import RootLayOut from './components/Pages/RootLayOut';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Session1 from './components/L1_LifeCycle_Class_Comp/Session1';
import PageNotFound from './components/Pages/PageNotFound';
import About from './components/Pages/About';
import Counter from './components/L1_LifeCycle_Class_Comp/Ass1/Counter';
import ProductsRouter from './components/Pages/ProductsRouter';
import UserProfile from './components/Pages/UserProfile';
import Session3 from './components/L3_children_callBack/Session3';
function App() {
  // console.log = () => { };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          path: "/",
          element: < Session1 />,
        },
        {
          path: "/day2",
          // element: < Parent />,
          children: [
            { path: '', element: <Parent /> },
            { path: 'd2', element: <ProductsRouter /> },
          ]
        },
        { path: "/day3", element: < Session3 /> },
        { path: "/day4", element: < Session4 /> },
        { path: "/day5", element: < Session5 /> },
        { path: "/day6", element: < Session6 /> },
        { path: "/day7", element: < Events /> },
        { path: "/day9", element: < Session9 /> },
        { path: "/day10", element: < Session10 /> },
        { path: "/day11", element: < Session11 /> },
        { path: "/day12", element: < Session12 /> },
        { path: "/day14", element: < Session14 /> },
        { path: "/day16", element: < Session16 /> },
        { path: "/about", element: < About /> },
        { path: "/profile/:username", element: < UserProfile /> },
        { path: "*", element: < PageNotFound /> },
      ]
    }
  ])




  return (
    // <div className=''>

    //   {/* <Test /> */}
    //   {/* <Counter /> */}
    //   {/* <Task2 /> */}

    //   {/* Ass-D2.1: Props validation  */}
    //   {/* <Parent /> */}

    //   {/* Ass-D2.2 : Props.children*/}
    //   {/* <ParentComponent /> */}

    //   {/* Ass-D3.1: Passing Data child to parent useState*/}
    //   {/* <ParentCard /> */}

    //   {/* Ass-D3.2: Store html-tags, Images, Logoes, Nested Objects, Arrays*/}
    //   {/* <LearnUseState /> */}

    //   {/*
    //       Ass-D4.1: Img src Error Handling
    //       Ass-D4.2: Learn Console Object Methods 
    //       Ass-D4.3: Implement Conditional Counter  
    //       Ass-D4.4: Props drilling with Multilevel Child Comp 
    //       Ass-D4.5: Adding Two Array Using Spread operator  
    //       Ass-D4.6: Manupulate Arrays (add, update, delete)  
    //   */}

    //   {/* <Session4 /> */}


    //   {/* 
    //     Ass-D5.1: Learn UseEffect
    //   */}

    //   {/* <Session5 /> */}

    //   {/* 
    //     Ass-D6.1: fetch Api using useEffect 
    //     Ass-D6.2:  settimeout, setInterval using useEffect 
    //     Ass-D6.3:  cookies using useEffect 
    //     Ass-D6.4:  localstorage Todo using useEffect
    //   */}

    //   {/* <Session6 /> */}

    //   {/* Ass-D7: Learn how to handle user events in React */}

    //   {/* <Events /> */}


    //   {/* Ass-D9:  */}

    //   {/* <Session9 /> */}

    //   {/* Ass- 10
    //       Ass-10.1: "remove Duplicates in array"
    //       Ass-10.2: "Nested Object"
    //       Ass-10.3: "Multiple Filter People Data"
    //   */}
    //   {/* <Session10 /> */}


    //   {/* Session 11
    //       Ass-11.1: Todo List

    //   */}
    //   {/* <Session11 /> */}


    //   {/* Session 12 & 13: From Handling and validation */}

    //   {/* <Session12 /> */}


    //   {/* <Session14 /> */}

    //   {/* Axios Lib and All Methods */}
    //   {/* <Session16 /> */}

    //   {/* react Routing */}
    //   <Session17Router />




    // </div>

    <div className=''>
      <RouterProvider router={router} />
    </div>
  )
}

export default App