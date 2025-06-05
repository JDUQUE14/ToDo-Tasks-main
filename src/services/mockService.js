import React from 'react';
import { Plus, Check, Trash2, Edit3, User, LogOut, CheckCircle, Clock, AlertCircle } from 'lucide-react';

// Mock Service - Datos falsos para práctica - IMPORTANTE
const mockService = {
    login: async (username, password) => {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simular delay
        if (username === 'admin' && password === 'password') {
            return {
                token: 'mock-jwt-token-123',
                user: { id: 1, username: 'admin', role: 'Admin' }
            };
        }
        if (username === 'user' && password === 'password') {
            return {
                token: 'mock-jwt-token-456',
                user: { id: 2, username: 'user', role: 'User ' }
            };
        }
        throw new Error('Credenciales inválidas');
    },

    getTasks: async () => {
        await new Promise(resolve => setTimeout(resolve, 500));
        return [
            { id: 1, name: 'Completar proyecto React', description: 'Desarrollar la interfaz de usuario', status: 0 },
            { id: 2, name: 'Estudiar Tailwind CSS', description: 'Aprender utility classes', status: 1 },
            { id: 3, name: 'Configurar API Backend', description: 'Conectar con .NET Core', status: 0 }
        ];
    },

    createTask: async (task) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        return { id: Date.now(), ...task, status: 0 };
    },

    updateTask: async (id, task) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        return { id, ...task };
    },

    /*
    deleteTask: async (id) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        return true;
    }
    */
};

export default mockService;
