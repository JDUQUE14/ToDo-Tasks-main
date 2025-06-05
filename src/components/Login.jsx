import React from 'react';
import { User } from 'lucide-react';
import '../index.css';

export default function Login({
  useMockService,
  setUseMockService,
  loginForm,
  setLoginForm,
  handleLogin,
  loading,
  loginError
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Toggle de servicio */}
        <div className="mb-6 p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <div className="flex items-center justify-between">
            <span className="text-white font-medium">Modo de desarrollo:</span>
            <button
              onClick={() => setUseMockService(!useMockService)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${useMockService ? 'bg-blue-600' : 'bg-gray-600'}`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${useMockService ? 'translate-x-6' : 'translate-x-1'}`}
              />
            </button>
          </div>
          <p className="text-white/70 text-sm mt-2">
            {useMockService ? '🔄 Usando datos simulados' : '🌐 Conectando al backend'}
          </p>
        </div>

        {/* Formulario de login */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">¡Bienvenido!</h1>
            <p className="text-white/70">Inicia sesión para gestionar tus tareas</p>
          </div>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Usuario"
              value={loginForm.username}
              onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            {loginError && (
              <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-2xl">
                <p className="text-red-200 text-sm">{loginError}</p>
              </div>
            )}
            <button
              type="button"
              onClick={handleLogin}
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
            >
              {loading ? '⏳ Iniciando sesión...' : '🚀 Iniciar Sesión'}
            </button>
          </form>

          {/* Credenciales de prueba */}
          <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-white/70 text-sm mb-2">Credenciales de prueba:</p>
            <div className="text-xs space-y-1">
              <p className="text-white/60">👤 Admin : admin / password</p>
              <p className="text-white/60">👤 Usuario : user / password</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

