import React, { useState } from 'react';
import { Package, Settings as SettingsIcon, Plus, Edit, Trash, LogOut, AlertTriangle, Image as ImageIcon, ExternalLink, AlertCircle, Check, FileJson, Download, X, Home as HomeIcon } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { Product, Category, SiteConfig, HomeCategory, QuickLink } from '../../types';
import { THEME_COLORS } from '../../constants';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const { products, categories, addProduct, updateProduct, deleteProduct, addCategory, siteConfig, updateSiteConfig, getThemeClasses } = useStore();
  const theme = getThemeClasses();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'inventory' | 'settings'>('inventory');
  
  // Product Form State
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialFormState: Product = {
    id: '',
    name: '',
    description: '',
    price: 0,
    category: 'Repuestos',
    imageUrl: '',
    stock: 0
  };
  const [formData, setFormData] = useState<Product>(initialFormState);

  // New Category State
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');

  // Delete Confirmation State
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);

  // Settings Form State
  const [configForm, setConfigForm] = useState<SiteConfig>(siteConfig);
  
  const handleOpenModal = (product?: Product) => {
    setIsAddingCategory(false);
    setNewCategoryName('');
    if (product) {
      setEditingProduct(product);
      setFormData(product);
    } else {
      setEditingProduct(null);
      setFormData({ ...initialFormState, id: Date.now().toString() });
    }
    setIsModalOpen(true);
  };

  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      updateProduct(formData);
    } else {
      addProduct(formData);
    }
    setIsModalOpen(false);
  };

  const handleCreateCategory = () => {
    if (newCategoryName.trim()) {
      addCategory(newCategoryName.trim());
      setFormData({...formData, category: newCategoryName.trim()});
      setIsAddingCategory(false);
      setNewCategoryName('');
    }
  };

  const handleDeleteClick = (product: Product) => {
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      deleteProduct(productToDelete.id);
      setIsDeleteModalOpen(false);
      setProductToDelete(null);
    }
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setProductToDelete(null);
  };

  const handleSettingsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteConfig(configForm);
    alert('Configuración actualizada en el navegador.');
  };

  const handleLogout = () => {
    localStorage.removeItem('ido_admin_auth');
    navigate('/admin');
  };

  // --- LOGIC TO GENERATE AND DOWNLOAD CODE ---

  const generateFullFileContent = () => {
    // We recreate the THEME_COLORS object string manually to ensure it's included in the file
    const themeColorsString = `export const THEME_COLORS = {
  green: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-600', hover: 'hover:bg-emerald-700', ring: 'focus:ring-emerald-500', btnHover: 'hover:bg-emerald-700' },
  blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600', hover: 'hover:bg-blue-700', ring: 'focus:ring-blue-500', btnHover: 'hover:bg-blue-700' },
  orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-600', hover: 'hover:bg-orange-700', ring: 'focus:ring-orange-500', btnHover: 'hover:bg-orange-700' },
  red: { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-600', hover: 'hover:bg-red-700', ring: 'focus:ring-red-500', btnHover: 'hover:bg-red-700' },
};`;

    return `import { Product, SiteConfig } from './types';

export const INITIAL_SITE_CONFIG: SiteConfig = ${JSON.stringify(configForm, null, 2)};

export const INITIAL_PRODUCTS: Product[] = ${JSON.stringify(products, null, 2)};

export const CATEGORIES: string[] = ${JSON.stringify(categories, null, 2)};

${themeColorsString}
`;
  };

  const handleDownloadCode = () => {
    const content = generateFullFileContent();
    const blob = new Blob([content], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'constants.ts'; // The file name to download
    document.body.appendChild(a);
    a.click();
    
    // Cleanup
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Helper to detect if user pasted a website link instead of an image
  const isWebsiteLink = (url: string) => {
    if (!url) return false;
    return url.includes('canva.site') || url.includes('canva.com/design');
  };

  // Helper for managing Home Categories in Settings
  const updateHomeCategory = (index: number, field: keyof HomeCategory, value: any) => {
    const updated = [...(configForm.homeCategories || [])];
    updated[index] = { ...updated[index], [field]: value };
    setConfigForm({ ...configForm, homeCategories: updated });
  };

  const addHomeCategory = () => {
    const newCat: HomeCategory = {
       id: Date.now().toString(),
       name: 'Nueva Categoría',
       description: 'Descripción breve',
       type: 'icon',
       value: 'Settings'
    };
    setConfigForm({ ...configForm, homeCategories: [...(configForm.homeCategories || []), newCat] });
  };

  const removeHomeCategory = (index: number) => {
     const updated = [...(configForm.homeCategories || [])];
     updated.splice(index, 1);
     setConfigForm({ ...configForm, homeCategories: updated });
  };

  // Helper for managing Quick Links in Settings
  const updateQuickLink = (index: number, field: keyof QuickLink, value: string) => {
    const updated = [...(configForm.quickLinks || [])];
    updated[index] = { ...updated[index], [field]: value };
    setConfigForm({ ...configForm, quickLinks: updated });
  };

  const addQuickLink = () => {
    setConfigForm({ ...configForm, quickLinks: [...(configForm.quickLinks || []), { text: 'Nuevo Enlace', url: '/' }] });
  };

  const removeQuickLink = (index: number) => {
    const updated = [...(configForm.quickLinks || [])];
    updated.splice(index, 1);
    setConfigForm({ ...configForm, quickLinks: updated });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-gray-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl">Panel de Administración IDO</span>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <LogOut size={18} /> Salir
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('inventory')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'inventory' 
                ? `${theme.bg} text-white shadow-md` 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Package size={20} /> Inventario
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'settings' 
                ? `${theme.bg} text-white shadow-md` 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <SettingsIcon size={20} /> Personalización
          </button>
        </div>

        {/* Content */}
        {activeTab === 'inventory' ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center flex-wrap gap-4">
              <h2 className="text-xl font-bold text-gray-800">Gestión de Productos</h2>
              
              <div className="flex gap-2">
                <button
                  onClick={handleDownloadCode}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                  title="Descargar archivo para guardar cambios permanentemente"
                >
                  <Download size={18} /> Guardar Cambios en Proyecto
                </button>
                <button
                  onClick={() => handleOpenModal()}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white ${theme.bg} ${theme.hover} transition-colors`}
                >
                  <Plus size={18} /> Nuevo Producto
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-gray-600 text-sm">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Producto</th>
                    <th className="px-6 py-4 font-semibold">Categoría</th>
                    <th className="px-6 py-4 font-semibold">Precio</th>
                    <th className="px-6 py-4 font-semibold">Stock</th>
                    <th className="px-6 py-4 font-semibold text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products.map(product => (
                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <img 
                          src={product.imageUrl} 
                          alt="" 
                          className="w-10 h-10 rounded object-cover bg-gray-100" 
                          onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x100?text=Error'; }}
                        />
                        <span className="font-medium text-gray-900">{product.name}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{product.category}</td>
                      <td className="px-6 py-4 font-medium text-gray-900">${product.price.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {product.stock} un.
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button onClick={() => handleOpenModal(product)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                            <Edit size={18} />
                          </button>
                          <button onClick={() => handleDeleteClick(product)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                            <Trash size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <SettingsIcon /> Configuración del Sitio
            </h2>
            <form onSubmit={handleSettingsSubmit} className="space-y-10">
              
              {/* SECTION: BRAND & COLOR */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-gray-800 border-b pb-2">Marca y Colores</h3>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Color Principal</label>
                  <div className="flex gap-4">
                    {Object.keys(THEME_COLORS).map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setConfigForm({...configForm, primaryColor: color as any})}
                        className={`w-10 h-10 rounded-full border-2 ${
                          configForm.primaryColor === color ? 'border-gray-900 scale-110' : 'border-transparent'
                        } ${THEME_COLORS[color as keyof typeof THEME_COLORS].bg} transition-all`}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* LOGO SETTINGS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">URL del Logo (Opcional)</label>
                    <div className="flex gap-4 items-center">
                      <div className="relative flex-grow">
                        <input
                          type="text"
                          className="w-full rounded-lg border-gray-300 border px-3 py-2 pl-8 bg-white text-gray-900"
                          value={configForm.logoUrl || ''}
                          onChange={(e) => setConfigForm({...configForm, logoUrl: e.target.value})}
                          placeholder="https://..."
                        />
                        <ImageIcon className="absolute left-2.5 top-2.5 text-gray-400" size={16} />
                      </div>
                      {configForm.logoUrl && (
                        <div className="h-10 w-10 bg-gray-100 rounded border flex items-center justify-center p-1">
                           <img src={configForm.logoUrl} alt="Logo" className="max-h-full max-w-full object-contain" />
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Si se deja vacío, se mostrará el nombre de la tienda con un icono.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Altura Logo Header (px)</label>
                    <input
                      type="number"
                      className="w-full rounded-lg border-gray-300 border px-3 py-2 bg-white text-gray-900"
                      value={configForm.logoHeight || 40}
                      onChange={(e) => setConfigForm({...configForm, logoHeight: parseInt(e.target.value) || 40})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Altura Logo Footer (px)</label>
                    <input
                      type="number"
                      className="w-full rounded-lg border-gray-300 border px-3 py-2 bg-white text-gray-900"
                      value={configForm.footerLogoHeight || 60}
                      onChange={(e) => setConfigForm({...configForm, footerLogoHeight: parseInt(e.target.value) || 60})}
                    />
                  </div>
                </div>

                {/* HERO SETTINGS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                   <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Imagen Principal (Hero URL)</label>
                    <div className="flex gap-4 items-start">
                      <div className="relative flex-grow">
                         <input
                          type="text"
                          className="w-full rounded-lg border-gray-300 border px-3 py-2 pl-8 bg-white text-gray-900"
                          value={configForm.heroImageUrl}
                          onChange={(e) => setConfigForm({...configForm, heroImageUrl: e.target.value})}
                        />
                        <ImageIcon className="absolute left-2.5 top-2.5 text-gray-400" size={16} />
                      </div>
                      {configForm.heroImageUrl && (
                         <img src={configForm.heroImageUrl} alt="Hero" className="w-20 h-12 object-cover rounded border" />
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Altura del Hero (px)</label>
                     <input
                      type="number"
                      className="w-full rounded-lg border-gray-300 border px-3 py-2 bg-white text-gray-900"
                      value={configForm.heroHeight || 500}
                      onChange={(e) => setConfigForm({...configForm, heroHeight: parseInt(e.target.value) || 500})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Título Hero</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border-gray-300 border px-3 py-2 bg-white text-gray-900"
                      value={configForm.heroTitle}
                      onChange={(e) => setConfigForm({...configForm, heroTitle: e.target.value})}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subtítulo Hero</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border-gray-300 border px-3 py-2 bg-white text-gray-900"
                      value={configForm.heroSubtitle}
                      onChange={(e) => setConfigForm({...configForm, heroSubtitle: e.target.value})}
                    />
                  </div>
                </div>
              </div>

               {/* SECTION: COMPANY TEXTS (NEW) */}
               <div className="space-y-6">
                <h3 className="text-lg font-bold text-gray-800 border-b pb-2">Textos Corporativos (Sobre Nosotros)</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Descripción de la Empresa</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border-gray-300 border px-3 py-2 bg-white text-gray-900"
                    value={configForm.companyDescription || ''}
                    onChange={(e) => setConfigForm({...configForm, companyDescription: e.target.value})}
                    placeholder="Descripción general que aparece en 'Quiénes Somos'..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Misión</label>
                  <textarea
                    rows={3}
                    className="w-full rounded-lg border-gray-300 border px-3 py-2 bg-white text-gray-900"
                    value={configForm.companyMission || ''}
                    onChange={(e) => setConfigForm({...configForm, companyMission: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Visión</label>
                  <textarea
                    rows={3}
                    className="w-full rounded-lg border-gray-300 border px-3 py-2 bg-white text-gray-900"
                    value={configForm.companyVision || ''}
                    onChange={(e) => setConfigForm({...configForm, companyVision: e.target.value})}
                  />
                </div>
               </div>

               {/* SECTION: CONTACT INFO */}
               <div className="space-y-6">
                <h3 className="text-lg font-bold text-gray-800 border-b pb-2">Información de Contacto</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border-gray-300 border px-3 py-2 bg-white text-gray-900"
                      value={configForm.contactPhone}
                      onChange={(e) => setConfigForm({...configForm, contactPhone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border-gray-300 border px-3 py-2 bg-white text-gray-900"
                      value={configForm.contactEmail}
                      onChange={(e) => setConfigForm({...configForm, contactEmail: e.target.value})}
                    />
                  </div>
                   <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Dirección del Local</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border-gray-300 border px-3 py-2 bg-white text-gray-900"
                      value={configForm.address || ''}
                      onChange={(e) => setConfigForm({...configForm, address: e.target.value})}
                      placeholder="Ej: Zona Industrial II..."
                    />
                  </div>
                </div>
              </div>

               {/* SECTION: HOME CATEGORIES */}
               <div className="space-y-6">
                <div className="flex justify-between items-center border-b pb-2">
                   <h3 className="text-lg font-bold text-gray-800">Categorías de Inicio (Visuales)</h3>
                   <button type="button" onClick={addHomeCategory} className="text-sm flex items-center gap-1 text-blue-600 hover:underline">
                      <Plus size={16} /> Agregar
                   </button>
                </div>
                
                <div className="space-y-4">
                  {(configForm.homeCategories || []).map((cat, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col md:flex-row gap-4 items-start relative group">
                      <button 
                        type="button" 
                        onClick={() => removeHomeCategory(index)} 
                        className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                        title="Eliminar"
                      >
                        <Trash size={16} />
                      </button>
                      
                      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                         <div>
                            <label className="text-xs font-semibold text-gray-500 uppercase">Nombre</label>
                            <input 
                              type="text" 
                              className="w-full border rounded px-2 py-1 text-sm bg-white text-gray-900"
                              value={cat.name}
                              onChange={(e) => updateHomeCategory(index, 'name', e.target.value)}
                            />
                         </div>
                         <div>
                            <label className="text-xs font-semibold text-gray-500 uppercase">Descripción</label>
                            <input 
                              type="text" 
                              className="w-full border rounded px-2 py-1 text-sm bg-white text-gray-900"
                              value={cat.description}
                              onChange={(e) => updateHomeCategory(index, 'description', e.target.value)}
                            />
                         </div>
                         <div>
                            <label className="text-xs font-semibold text-gray-500 uppercase">Tipo</label>
                            <select 
                              className="w-full border rounded px-2 py-1 text-sm bg-white text-gray-900"
                              value={cat.type}
                              onChange={(e) => updateHomeCategory(index, 'type', e.target.value)}
                            >
                              <option value="icon">Icono Predeterminado</option>
                              <option value="image">Imagen Personalizada (URL)</option>
                            </select>
                         </div>
                         <div>
                            <label className="text-xs font-semibold text-gray-500 uppercase">
                              {cat.type === 'icon' ? 'Seleccionar Icono' : 'URL de Imagen'}
                            </label>
                            {cat.type === 'icon' ? (
                               <select 
                                className="w-full border rounded px-2 py-1 text-sm bg-white text-gray-900"
                                value={cat.value}
                                onChange={(e) => updateHomeCategory(index, 'value', e.target.value)}
                               >
                                 <option value="Settings">Engranaje (Settings)</option>
                                 <option value="Wrench">Llave (Wrench)</option>
                                 <option value="Hammer">Martillo (Hammer)</option>
                                 <option value="Sprout">Hoja/Campo (Sprout)</option>
                                 <option value="Tractor">Tractor</option>
                                 <option value="Truck">Camión</option>
                                 <option value="Package">Paquete</option>
                                 <option value="ShoppingBag">Bolsa</option>
                                 <option value="Zap">Rayo</option>
                               </select>
                            ) : (
                              <input 
                                type="text" 
                                className="w-full border rounded px-2 py-1 text-sm bg-white text-gray-900"
                                placeholder="https://..."
                                value={cat.value}
                                onChange={(e) => updateHomeCategory(index, 'value', e.target.value)}
                              />
                            )}
                         </div>
                      </div>
                      
                      {/* Preview */}
                      <div className="w-16 h-16 flex-shrink-0 bg-white rounded border flex items-center justify-center">
                         {cat.type === 'image' && cat.value ? (
                           <img src={cat.value} className="w-full h-full object-cover rounded" alt="Preview" />
                         ) : (
                           <HomeIcon className="text-gray-400" />
                         )}
                         {cat.type === 'icon' && <span className="text-xs text-gray-500">{cat.value}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

               {/* SECTION: FOOTER QUICK LINKS */}
               <div className="space-y-6">
                <div className="flex justify-between items-center border-b pb-2">
                   <h3 className="text-lg font-bold text-gray-800">Enlaces Rápidos (Pie de Página)</h3>
                   <button type="button" onClick={addQuickLink} className="text-sm flex items-center gap-1 text-blue-600 hover:underline">
                      <Plus size={16} /> Agregar
                   </button>
                </div>
                
                <div className="space-y-3">
                  {(configForm.quickLinks || []).map((link, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <input 
                        type="text" 
                        className="flex-1 border rounded px-3 py-2 text-sm bg-white text-gray-900"
                        placeholder="Texto del enlace"
                        value={link.text}
                        onChange={(e) => updateQuickLink(index, 'text', e.target.value)}
                      />
                      <input 
                        type="text" 
                        className="flex-1 border rounded px-3 py-2 text-sm bg-white text-gray-900"
                        placeholder="URL (Ej: /catalog o https://...)"
                        value={link.url}
                        onChange={(e) => updateQuickLink(index, 'url', e.target.value)}
                      />
                      <button 
                        type="button" 
                        onClick={() => removeQuickLink(index)} 
                        className="p-2 text-gray-400 hover:text-red-500"
                      >
                        <Trash size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* SAVE & EXPORT BUTTONS */}
              <div className="sticky bottom-4 bg-white p-4 shadow-xl border-t rounded-xl flex flex-col md:flex-row gap-4">
                 <button
                  type="submit"
                  className={`flex-1 py-4 rounded-lg text-white font-bold text-lg shadow-lg ${theme.bg} ${theme.hover} transition-all transform hover:scale-[1.01]`}
                >
                  Guardar Configuración Completa
                </button>
                
                <button
                  type="button"
                  onClick={handleDownloadCode}
                  className="flex-shrink-0 bg-gray-800 text-white px-6 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-700 transition-colors"
                  title="Descargar constants.ts con todos los productos y configuraciones"
                >
                  <Download size={20} /> Guardar Cambios en Proyecto
                </button>
              </div>

            </form>
          </div>
        )}
      </div>

      {/* Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-xl font-bold">{editingProduct ? 'Editar Producto' : 'Nuevo Producto'}</h3>
              <button onClick={() => setIsModalOpen(false)}><span className="text-2xl">&times;</span></button>
            </div>
            <form onSubmit={handleProductSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input required type="text" className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                <textarea required className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none" rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Precio</label>
                  <input required type="number" step="0.01" className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none" value={formData.price} onChange={e => setFormData({...formData, price: parseFloat(e.target.value)})} />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                  <input required type="number" className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none" value={formData.stock} onChange={e => setFormData({...formData, stock: parseInt(e.target.value)})} />
                </div>
              </div>

              {/* Dynamic Category Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                
                {isAddingCategory ? (
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      autoFocus
                      placeholder="Nombre nueva categoría..."
                      className="flex-grow border border-gray-300 rounded-lg p-2.5 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      value={newCategoryName}
                      onChange={(e) => setNewCategoryName(e.target.value)}
                    />
                    <button 
                      type="button" 
                      onClick={handleCreateCategory}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      <Check size={20} />
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setIsAddingCategory(false)}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                    >
                      Cancelar
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <select 
                      className="flex-grow border border-gray-300 rounded-lg p-2.5 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                      value={formData.category} 
                      onChange={e => setFormData({...formData, category: e.target.value})}
                    >
                      {categories.filter(c => c !== 'Todas').map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <button 
                      type="button" 
                      onClick={() => setIsAddingCategory(true)}
                      className="px-3 py-2 bg-gray-100 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-200 flex items-center gap-1 text-sm font-medium whitespace-nowrap"
                    >
                      <Plus size={16} /> Nueva
                    </button>
                  </div>
                )}
              </div>

              {/* Enhanced Image Input with Preview and Canva Instructions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL de la Imagen</label>
                <div className="flex gap-4 items-start">
                  <div className="flex-grow">
                    <div className="relative">
                      <input 
                        required 
                        type="text" 
                        className="w-full border border-gray-300 rounded-lg p-2.5 pl-8 text-sm bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="https://..."
                        value={formData.imageUrl} 
                        onChange={e => setFormData({...formData, imageUrl: e.target.value})} 
                      />
                      <ImageIcon className="absolute left-2.5 top-2.5 text-gray-400" size={16} />
                    </div>

                    {isWebsiteLink(formData.imageUrl) ? (
                      <div className="mt-2 bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800 flex gap-2 animate-fade-in">
                        <AlertCircle className="flex-shrink-0 mt-0.5" size={16} />
                        <div>
                          <p className="font-bold mb-1">¡Parece un enlace de sitio web!</p>
                          <p>
                            Has pegado la dirección de la página completa, no de la imagen. 
                            <br/>
                            1. Ve a esa página.
                            <br/>
                            2. Haz <strong>Click Derecho</strong> sobre la foto.
                            <br/>
                            3. Elige <strong>"Copiar dirección de la imagen"</strong>.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-2 text-xs text-gray-500 bg-gray-50 p-2 rounded border border-gray-200">
                        <div className="flex items-center gap-1 font-semibold mb-1">
                          <ExternalLink size={10} /> Cómo usar Canva:
                        </div>
                        <p>
                          1. En Canva, publica/comparte tu diseño como "Sitio Web" o "Ver enlace público".<br/>
                          2. Abre ese enlace, haz clic derecho sobre la imagen y selecciona <strong>"Copiar dirección de imagen"</strong>.
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {formData.imageUrl && !isWebsiteLink(formData.imageUrl) && (
                    <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded border border-gray-200 overflow-hidden relative group">
                      <img 
                        src={formData.imageUrl} 
                        alt="Vista previa" 
                        className="w-full h-full object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/150?text=Error'; }}
                      />
                    </div>
                  )}
                </div>
              </div>

              <button type="submit" className={`w-full py-3 rounded-lg text-white font-medium ${theme.bg} ${theme.hover} mt-4`}>
                Guardar Producto
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && productToDelete && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 text-center transform transition-all scale-100">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
               <AlertTriangle size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">¿Eliminar Producto?</h3>
            <p className="text-gray-500 mb-6">
              Estás a punto de eliminar <span className="font-bold text-gray-800">"{productToDelete.name}"</span>. 
              <br/>Esta acción no se puede deshacer.
            </p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={cancelDelete}
                className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Cancelar
              </button>
              <button 
                onClick={confirmDelete}
                className="px-6 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Sí, Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;