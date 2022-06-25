import EventsExample from "./components/EventsExample";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import CardPage from "./components/CardPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

import {
    BrowserRouter,
    Routes,
    Route, Link,
} from "react-router-dom";

const App = () => {
    return <BrowserRouter>
        <nav>
            <Link to='/card'>Card Page</Link>
            <Link to='/users'>Users Page</Link>
            <Link to='/todos'>Todos Page</Link>
            <Link to='/events'>Events Example</Link>
        </nav>

        <Routes>
            <Route path='/card' element={<CardPage/>}/>
            <Route path='/users' element={<UsersPage/>}/>
            <Route path='/todos' element={<TodosPage/>}/>
            <Route path='/events' element={<EventsExample/>}/>

            <Route path='/users/:id' element={<UserItemPage/>}/>
            <Route path='/todos/:id' element={<TodoItemPage/>}/>

            <Route path='/*' element={<CardPage/>}/>
        </Routes>
    </BrowserRouter>
};

export default App;