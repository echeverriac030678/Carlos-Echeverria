import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const { getThemeClasses } = useStore();
  const theme = getThemeClasses();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Updated mock password for MVP
    if (password === 'Ca$ioped4') {
      localStorage.setItem('ido_admin_auth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Contraseña incorrecta');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <div className="bg-gray-200 p-4 rounded-full">
            <Lock size={32} className="text-gray-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Acceso Administrativo</h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white text-gray-900"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          {error && <p className="text-red-500 text-sm">{error}</p>}
          
          <button
            type="submit"
            className={`w-full py-3 rounded-lg text-white font-medium ${theme.bg} ${theme.hover} transition-colors`}
          >
            Ingresar
          </button>
        </form>
        
        <button
          onClick={() => navigate('/')}
          className="w-full mt-4 text-sm text-gray-500 hover:text-gray-800"
        >
          Volver a la tienda
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;