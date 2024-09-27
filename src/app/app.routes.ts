import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
        canActivate: [authGuard]
    },
    {
        path: 'attendance',
        loadComponent: () => import('./pages/attendance/attendance.component').then(m => m.AttendanceComponent),
        canActivate: [authGuard]
    },
    {
        path: 'attendance',
        loadComponent: () => import('./pages/employee/employee.component').then(m => m.EmployeeComponent),
        canActivate: [authGuard]
    },
    {
        path: 'attendance',
        loadComponent: () => import('./pages/salary/salary.component').then(m => m.SalaryComponent),
        canActivate: [authGuard]
    }
];
