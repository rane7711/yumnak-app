import React, { useState } from 'react';
import { 
  ShieldCheck, Search, PlusCircle, MapPin, Filter, MessageSquare, 
  Sparkles, CheckCircle2, Car, Home, Smartphone, Briefcase, Sofa, 
  Tractor, HeartHandshake, Phone
} from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  
  // الأقسام الشاملة المحدثة لمنصة يُمناك
  const categories = [
    { id: 'all', name: 'الكل', icon: null },
    { id: 'cars', name: 'السيارات', icon: <Car className="w-4 h-4" /> },
    { id: 'realestate', name: 'العقارات', icon: <Home className="w-4 h-4" /> },
    { id: 'electronics', name: 'الأجهزة', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'services', name: 'الخدمات', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'furniture', name: 'الأثاث', icon: <Sofa className="w-4 h-4" /> },
    { id: 'agriculture', name: 'مواشي وزراعة', icon: <Tractor className="w-4 h-4" /> }
  ];

  const listings = [
    {
      id: 1, title: 'هوندا أكورد 2008 بحالة الوكالة - فحص جديد', price: '22,000 ر.س',
      category: 'السيارات', city: 'الرياض', district: 'الجنادرية',
      seller: 'سعود الشهري', isVerified: true, hasEscrow: true,
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&auto=format&fit=crop', time: 'قبل 5 دقائق'
    },
    {
      id: 2, title: 'فيلا دبلكس بالجنادرية جاهزة للسكن', price: '1,450,000 ر.س',
      category: 'العقارات', city: 'الرياض', district: 'الجنادرية',
      seller: 'أبو محمد', isVerified: true, hasEscrow: true,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop', time: 'قبل ساعة'
    },
    {
      id: 3, title: 'هافال اتش 7 2025 للتنازل بدون مقابل', price: 'على السوم',
      category: 'السيارات', city: 'الرياض', district: 'الشفا',
      seller: 'عبدالله', isVerified: true, hasEscrow: false,
      image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=600&auto=format&fit=crop', time: 'قبل ساعتين'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBF6EA] text-[#10211B] dir-rtl">
      
      {/* 1. Header (Yumnak Branding) */}
      <header className="sticky top-0 z-50 bg-[#10211B] text-white shadow-lg border-b-2 border-[#0A8F6A]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 bg-[#0A8F6A] rounded-xl flex items-center justify-center border border-[#D8A43B]">
              <HeartHandshake className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold font-heading text-white">يُمناك</h1>
              <p className="text-[11px] text-[#D8A43B] font-bold">يدٍ تضمن .. ويدٍ تُبايع</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 bg-[#D8A43B]/20 text-[#D8A43B] px-3 py-2 rounded-xl text-xs">
              <ShieldCheck className="w-4 h-4" />
              أمان نفاذ
            </button>
            <button className="flex items-center gap-2 bg-[#0A8F6A] hover:bg-[#087758] text-white font-bold px-4 py-2 rounded-xl text-sm transition shadow">
              <PlusCircle className="w-5 h-5" />
              <span className="hidden sm:inline">أضف إعلانك</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Search & Categories */}
      <section className="max-w-7xl mx-auto px-4 pt-6 pb-2">
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute right-4 top-3 text-gray-400" />
            <input 
              type="text" 
              placeholder="ابحث في يُمناك (سيارات، عقارات، أجهزة)..."
              className="w-full pr-12 pl-4 py-2.5 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#0A8F6A] text-sm"
            />
          </div>
          <button className="bg-[#10211B] text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
            <Filter className="w-4 h-4" /> تصفية
          </button>
        </div>

        {/* Horizontal Scroll Categories */}
        <div className="flex items-center gap-2 overflow-x-auto py-4 no-scrollbar mt-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition ${
                selectedCategory === cat.name 
                  ? 'bg-[#0A8F6A] text-white shadow' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Listings Grid */}
      <main className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
          {listings.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm flex flex-col">
              <div className="relative h-48">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                {item.hasEscrow && (
                  <div className="absolute top-2 right-2 bg-[#10211B]/80 text-[#D8A43B] text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> الدفع الآمن
                  </div>
                )}
                <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded">
                  {item.time}
                </div>
              </div>
              
              <div className="p-4 flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-[#0A8F6A] bg-[#0A8F6A]/10 px-2 py-1 rounded-md">{item.category}</span>
                  <span className="text-[11px] text-gray-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {item.city} ({item.district})
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{item.title}</h3>
                <p className="text-lg font-extrabold text-[#10211B]">{item.price}</p>
              </div>

              <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#0A8F6A]/20 rounded-full flex items-center justify-center text-[#0A8F6A] font-bold text-xs">
                    {item.seller[0]}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-800 flex items-center gap-1">
                      {item.seller}
                      {item.isVerified && <CheckCircle2 className="w-3.5 h-3.5 text-[#0A8F6A]" />}
                    </div>
                  </div>
                </div>
                <button className="bg-[#10211B] text-white p-1.5 rounded-lg">
                  <MessageSquare className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 4. Founder & Copyright Footer */}
      <footer className="bg-[#10211B] text-gray-400 py-8 text-center text-xs border-t-4 border-[#0A8F6A]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-3">
          <HeartHandshake className="w-8 h-8 text-[#0A8F6A]" />
          <div>
            <p className="text-white font-bold text-lg mb-1">منصة يُمناك الإعلانية</p>
            <p>أول منصة مبايعات سعودية محمية بتقنية بصمة الأجهزة المباشرة.</p>
          </div>
          
          <div className="bg-[#1a332a] p-4 rounded-xl border border-gray-700 w-full max-w-sm mt-2 text-right">
            <h4 className="text-[#D8A43B] font-bold mb-2">بيانات المؤسس والمطور:</h4>
            <p className="text-white text-sm">سعود الشهري</p>
            <p className="flex items-center justify-end gap-2 text-gray-300 mt-1">
               0555847022 <Phone className="w-3.5 h-3.5" />
            </p>
          </div>
          
          <p className="mt-4 opacity-50">© 2026 جميع الحقوق محفوظة لمنصة يُمناك | تطوير سعود الشهري</p>
        </div>
      </footer>
    </div>
  );
}
