const apiService = {
    baseUrl: 'https://localhost:5001/api',
    token: null,

    login: async (username, password) => {
        const response = await fetch(`${apiService.baseUrl}/Account/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        if (!response.ok) throw new Error('Error de login');
        const data = await response.json();
        apiService.token = data.token;
        return data;
    },

    getTasks: async () => {
        const response = await fetch(`${apiService.baseUrl}/Assignments`, {
            headers: { 'Authorization': `Bearer ${apiService.token}` }
        });
        if (!response.ok) throw new Error('Error al obtener tareas');
        return response.json();
    },

    createTask: async (task) => {
        const response = await fetch(`${apiService.baseUrl}/Assignments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiService.token}`
            },
            body: JSON.stringify(task)
        });
        if (!response.ok) throw new Error('Error al crear tarea');
        return response.json();
    },

    updateTask: async (id, task) => {
        const response = await fetch(`${apiService.baseUrl}/Assignments/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiService.token}`
            },
            body: JSON.stringify(task)
        });
        if (!response.ok) throw new Error('Error al actualizar tarea');
        return response.json();
    },

    deleteTask: async (id) => {
        const response = await fetch(`${apiService.baseUrl}/Assignments/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${apiService.token}` }
        });
        if (!response.ok) throw new Error('Error al eliminar tarea');
        return true;
    }
};

export default apiService;
