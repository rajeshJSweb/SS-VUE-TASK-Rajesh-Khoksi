import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmployeeList from '../views/EmployeeList.vue'
import AdminList from '../views/AdminList.vue'
import EditEmployee from '../views/EditEmployee.vue'
import ViewEmployee from '../views/ViewEmployee.vue'
import AddEmployee from '../views/AddEmployee.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    redirect : 'employees',
    component: HomeView
  },
  {
    path: '/employees',
    name: 'EmployeeList',
    component: EmployeeList
  },
  {
    path: '/employees/add',
    name: 'AddEmployee',
    component: AddEmployee
  },
  
  {
    path: '/employees/edit/:employeeId',
    name: 'EditEmployee',
    component: EditEmployee
  },
  {
    path: '/employees/view/:employeeId',
    name: 'ViewEmployee',
    component: ViewEmployee
  },
  
  {
    path: '/admin',
    name: 'AdminList',
    component: AdminList
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
