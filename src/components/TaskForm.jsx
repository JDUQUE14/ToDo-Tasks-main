import React from 'react';
import '../index.css';

export default function TaskForm({
    isEditing,
    taskForm,
    setTaskForm,
    handleTaskSubmit,
    loading,
    setShowTaskForm,
    setIsEditing
}) {
    return (
        <div className="mb-8 bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">
                {isEditing ? '✏ Editar Tarea' : '➕ Nueva Tarea'}
            </h3>
            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Nombre de la tarea"
                    value={taskForm.name}
                    onChange={(e) => setTaskForm({ ...taskForm, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <textarea
                    placeholder="Descripción (opcional)"
                    value={taskForm.description}
                    onChange={(e) => setTaskForm({ ...taskForm, description: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    rows="3"
                />
                <div className="flex space-x-3">
                    <button
                        type="button"
                        onClick={handleTaskSubmit}
                        disabled={loading}
                        className="px-6 py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors disabled:opacity-50"
                    >
                        {loading ? '⏳' : isEditing ? '💾 Actualizar' : '➕ Crear'}
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setShowTaskForm(false);
                            setIsEditing(null);
                            setTaskForm({ name: '', description: '' });
                        }}
                        className="px-6 py-2 bg-gray-600 text-white rounded-2xl hover:bg-gray-700 transition-colors"
                    >
                        ❌ Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}
