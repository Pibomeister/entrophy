import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Mesa Dulce Básica',
    description: 'Una hermosa mesa de dulces con una variedad de golosinas tradicionales mexicanas. Ideal para eventos pequeños y celebraciones íntimas.',
    price: 4999,
    tier: 'Basic',
    imageUrl: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      '8 variedades de dulces tradicionales mexicanos',
      'Decoración básica temática',
      'Montaje y desmontaje incluido',
      'Duración de 4 horas',
      'Servicio de mesa de 2.5 metros'
    ],
    maxGuests: 50
  },
  {
    id: '2',
    name: 'Mesa Dulce Premium',
    description: 'Una experiencia completa de dulces mexicanos con mayor variedad y presentación elegante. Perfecta para bodas y eventos corporativos.',
    price: 7999,
    tier: 'Premium',
    imageUrl: 'https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      '15 variedades de dulces tradicionales y gourmet',
      'Decoración premium temática personalizable',
      'Montaje y desmontaje incluido',
      'Duración de 6 horas',
      'Servicio de mesa de 4 metros',
      'Personal de servicio incluido',
      'Bolsitas de recuerdo para invitados'
    ],
    maxGuests: 100
  },
  {
    id: '3',
    name: 'Mesa Dulce Luxury',
    description: 'La experiencia definitiva en mesas de dulces para tu evento. Incluye variedades exclusivas, decoración personalizada completa y atención premium.',
    price: 12999,
    tier: 'Luxury',
    imageUrl: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      '25 variedades de dulces premium, internacionales y artesanales',
      'Decoración luxury completamente personalizada',
      'Montaje y desmontaje incluido',
      'Duración ilimitada durante el evento',
      'Servicio de mesa de 6 metros con islas adicionales',
      'Personal de servicio dedicado',
      'Bolsitas de recuerdo premium personalizadas',
      'Fuente de chocolate incluida',
      'Mesa de postres adicional',
      'Coordinación con el tema del evento'
    ],
    maxGuests: 200
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};