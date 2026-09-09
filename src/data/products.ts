import animaleImg from "@/assets/products/animale.jpg";
import asadImg from "@/assets/products/asad.jpg";
import ameeratImg from "@/assets/products/ameerat-al-arab.jpg";
import azzaroImg from "@/assets/products/azzaro.jpg";
import durratImg from "@/assets/products/durrat-al-aroos.jpg";
import fakharImg from "@/assets/products/fakhar.jpg";
import hayaImg from "@/assets/products/haya.jpg";
import musamamImg from "@/assets/products/musamam-white.jpg";
import leonieImg from "@/assets/products/leonie.jpg";
import milestoneImg from "@/assets/products/milestone.jpg";
import sabahImg from "@/assets/products/sabah-al-ward.jpg";
import soCandidImg from "@/assets/products/so-candid-rouge.jpg";
import urbanManImg from "@/assets/products/urban-man.jpg";
import clubDeNuitWomanImg from "@/assets/products/club-de-nuit-woman.jpg";
import yaraImg from "@/assets/products/yara.jpg";
import aquaKissImg from "@/assets/products/aqua-kiss.jpg";
import strawberriesChampagneImg from "@/assets/products/strawberries-champagne.jpg";
import velvetPetalsImg from "@/assets/products/velvet-petals.jpg";
import philosPuraImg from "@/assets/products/philos-pura.png";
import liquidBrunImg from "@/assets/products/liquid-brun.webp";
import marwaImg from "@/assets/products/marwa.webp";
import afnan9pmImg from "@/assets/products/afnan-9pm.webp";

export type ProductGender = "feminino" | "masculino" | "unissex";

export interface Product {
  id: number;
  name: string;
  brand: string;
  gender: ProductGender; // 👈 usado pelo filtro do catálogo
  /**
   * Controle de visibilidade no catálogo.
   * true  = produto aparece normalmente no site
   * false = produto fica cadastrado, porém oculto (vitrine, filtros, relacionados, página individual)
   * Para reativar um produto, basta trocar active: false por active: true.
   */
  active: boolean;
  description: string;
  fullDescription?: string;
  price: number;
  originalPrice: number;
  image: string;
  /**
   * Enquadramento da imagem no card da vitrine.
   * Deixe indefinido para o padrão (foto com fundo já recortado → object-cover).
   * Use `true` quando a imagem for um render "justo" da embalagem (produto encostando nas
   * bordas): o card passa a exibi-la com object-contain + respiro interno, para o produto
   * aparecer no mesmo tamanho visual dos demais. Só afeta o card da vitrine.
   */
  imageContain?: boolean;
  inStock: boolean; // 👈 novo
  slug?: string;
}

export const products: Product[] = [
  {
    id: 1,
    gender: "feminino",
    active: true,
    name: "Club de Nuit Woman EDP 105ml",
    brand: "Armaf",
    description: "Floral, Frutal, Feminino, Sofisticado",
    fullDescription: "Uma fragrância feminina sofisticada que combina notas florais e frutais com um fundo amadeirado. Inspirada em perfumes de grife, oferece excelente fixação e projeção, perfeita para mulheres elegantes que buscam uma assinatura marcante.",
    price: 269.90,
    originalPrice: 399.90,
    image: clubDeNuitWomanImg,
    inStock: true,
  },
  {
    id: 2,
    gender: "feminino",
    active: true,
    name: "Yara Rosa Claro 100ml",
    brand: "Lattafa",
    description: "Gourmand, Doce, Feminino, Romântico",
    fullDescription: "Uma versão mais suave e romântica do icônico Yara. Notas de orquídea, baunilha e frutas tropicais criam uma fragrância irresistivelmente doce e feminina. Ideal para mulheres que amam perfumes gourmand com toque floral.",
    price: 249.90,
    originalPrice: 349.90,
    image: yaraImg,
    inStock: true,
  },
  {
    id: 3,
    gender: "feminino",
    active: true,
    name: "Sabah Al Ward",
    brand: "Al Wataniah",
    description: "Floral, Rosa, Feminino, Delicado",
    fullDescription: "Uma celebração da rosa em sua forma mais pura e elegante. Notas de rosa damascena, almíscar e sândalo criam uma fragrância atemporal e sofisticada. Perfeita para mulheres que apreciam a beleza clássica das rosas.",
    price: 179.90,
    originalPrice: 279.90,
    image: sabahImg,
    inStock: true,
  },
  {
    id: 4,
    gender: "feminino",
    active: true,
    name: "Fakhar Pride of Rose Gold",
    brand: "Lattafa",
    description: "Oriental, Floral, Feminino, Luxuoso",
    fullDescription: "Uma fragrância feminina opulenta que combina rosa búlgara com notas orientais ricas. Âmbar, oud e especiarias criam uma experiência olfativa luxuosa e duradoura. Para mulheres que desejam se destacar.",
    price: 189.90,
    originalPrice: 289.90,
    image: fakharImg,
    inStock: true,
  },
  {
    id: 5,
    gender: "masculino",
    active: true,
    name: "Asad",
    brand: "Lattafa",
    description: "Amadeirado, Intenso, Masculino, Marcante",
    fullDescription: "Uma fragrância masculina poderosa e sofisticada. Notas de tabaco, baunilha e madeiras preciosas criam um perfume intenso e sedutor. Inspirado em criações de alta perfumaria, oferece fixação excepcional.",
    price: 189.90,
    originalPrice: 289.90,
    image: asadImg,
    inStock: true,
  },
  {
    id: 6,
    gender: "feminino",
    active: true,
    name: "Leonie Intense 100ml",
    brand: "Maison Alhambra",
    description: "Floral, Intenso, Feminino, Elegante",
    fullDescription: "Uma interpretação intensa e moderna de fragrâncias florais clássicas. Jasmim, tuberosa e sândalo se combinam em uma composição sofisticada. Perfeita para ocasiões especiais e mulheres que amam perfumes marcantes.",
    price: 144.90,
    originalPrice: 229.90,
    image: leonieImg,
    inStock: true, // ❌ esgotado
  },
  {
    id: 7,
    gender: "feminino",
    active: true,
    name: "So Candid Rouge 85ml",
    brand: "Maison Alhambra",
    description: "Frutal, Sensual, Feminino, Moderno",
    fullDescription: "Uma fragrância feminina vibrante e sedutora. Notas de frutas vermelhas, rosa e almíscar criam uma composição irresistível e moderna. Ideal para mulheres confiantes que adoram se destacar.",
    price: 155.90,
    originalPrice: 239.90,
    image: soCandidImg,
    inStock: true,
  },
  {
    id: 8,
    gender: "feminino",
    active: true,
    name: "Haya F EDP 100ml",
    brand: "Lattafa",
    description: "Floral, Fresh, Feminino, Versátil",
    fullDescription: "Uma fragrância fresca e feminina que combina notas florais com acordes aquáticos. Perfeita para o dia a dia, oferece uma sensação de leveza e elegância natural. Ideal para mulheres modernas e dinâmicas.",
    price: 219.90,
    originalPrice: 319.90,
    image: hayaImg,
    inStock: true,
  },
  {
    id: 10,
    gender: "feminino",
    active: true,
    name: "Musaman White Intense 100ml",
    brand: "Lattafa",
    description: "Fresh, Amadeirado, Masculino, Clean",
    fullDescription: "Uma fragrância masculina clean e sofisticada. Notas cítricas, madeiras brancas e almíscar criam um perfume versátil e elegante. Perfeito para homens que apreciam frescor com personalidade.",
    price: 299.90,
    originalPrice: 399.90,
    image: musamamImg,
    inStock: true,
  },
  {
    id: 11,
    gender: "masculino",
    active: false, // 👈 oculto temporariamente
    name: "Pour Homme EDT 100ml",
    brand: "Azzaro",
    description: "Aromático, Fougère, Masculino, Clássico",
    fullDescription: "Um clássico atemporal da perfumaria masculina. Notas de lavanda, anis e madeiras criam uma fragrância elegante e sofisticada. Perfeito para homens que valorizam tradição e refinamento.",
    price: 309.90,
    originalPrice: 449.90,
    image: azzaroImg,
    inStock: false,
  },
  {
    id: 12,
    gender: "feminino",
    active: true,
    name: "Durrat Al Aroos",
    brand: "Al Wataniah",
    description: "Oriental, Floral, Feminino, Exótico",
    fullDescription: "Uma fragrância oriental feminina rica e envolvente. Notas de açafrão, rosa e oud criam uma experiência olfativa luxuosa e exótica. Para mulheres que buscam exclusividade e sofisticação árabe.",
    price: 129.90,
    originalPrice: 199.90,
    image: durratImg,
    inStock: true,
  },
  {
    id: 13,
    gender: "feminino",
    active: true,
    name: "Ameerat Al Arab 100ml",
    brand: "Asdaaf",
    description: "Oriental, Amadeirado, Feminino, Elegante",
    fullDescription: "Uma fragrância feminina que captura a essência da realeza árabe. Notas de frutas, flores e madeiras preciosas criam um perfume sofisticado e duradouro. Para princesas modernas.",
    price: 289.90,
    originalPrice: 399.90,
    image: ameeratImg,
    inStock: true,
  },
  {
    id: 14,
    gender: "feminino",
    active: false,
    name: "Animale EDP 100ml",
    brand: "Animale",
    description: "Floral, Oriental, Feminino, Sensual",
    fullDescription: "Uma fragrância feminina clássica e sedutora. Notas de jasmim, sândalo e baunilha criam uma composição envolvente e atemporal. Perfeita para mulheres que amam perfumes marcantes e sensuais.",
    price: 289.90,
    originalPrice: 399.90,
    image: animaleImg,
    inStock: false,
  },
  {
    id: 15,
    gender: "masculino",
    active: true,
    name: "Club de Nuit Urban Elixir 105ml",
    brand: "Armaf",
    description: "Amadeirado, Especiado, Masculino, Moderno",
    fullDescription: "Uma fragrância masculina urbana e contemporânea. Notas de especiarias, madeiras e couro criam um perfume sofisticado para o homem moderno. Excelente fixação e projeção para conquistar.",
    price: 279.90,
    originalPrice: 399.90,
    image: urbanManImg,
    inStock: true,
  },
  {
    id: 16,
    gender: "feminino",
    active: false, // 👈 oculto temporariamente
    name: "Loção Corporal Aqua Kiss 250ml",
    brand: "Victoria's Secret",
    description: "Fresh, Aquático, Feminino, Refrescante",
    fullDescription: "Uma loção corporal refrescante e sedutora com notas aquáticas e florais. Hidrata e perfuma a pele com uma fragrância leve e duradoura. Perfeita para o dia a dia.",
    price: 119.90,
    originalPrice: 179.90,
    image: aquaKissImg,
    inStock: true,
  },
  {
    id: 17,
    gender: "feminino",
    active: false, // 👈 oculto temporariamente
    name: "Loção Corporal Strawberries & Champagne 250ml",
    brand: "Victoria's Secret",
    description: "Frutal, Doce, Feminino, Romântico",
    fullDescription: "Uma loção corporal irresistível com notas de morangos frescos e champagne efervescente. Hidrata e perfuma a pele com uma fragrância doce e sofisticada.",
    price: 119.90,
    originalPrice: 179.90,
    image: strawberriesChampagneImg,
    inStock: true,
  },
  {
    id: 18,
    gender: "feminino",
    active: false, // 👈 oculto temporariamente
    name: "Loção Corporal Velvet Petals 250ml",
    brand: "Victoria's Secret",
    description: "Floral, Suave, Feminino, Delicado",
    fullDescription: "Uma loção corporal feminina e romântica com notas de pétalas aveludadas e almíscar suave. Hidrata e deixa a pele perfumada com uma fragrância delicada e envolvente.",
    price: 119.90,
    originalPrice: 179.90,
    image: velvetPetalsImg,
    inStock: true,
  },
  {
    id: 19,
    gender: "unissex",
    active: true,
    name: "Philos Pura 100ml",
    brand: "Maison Alhambra",
    description: "Frutal, Cítrico, Unissex, Fresco, Versátil",
    fullDescription: "Philos Pura, da Maison Alhambra, é uma fragrância aromática frutal de perfil fresco, cítrico e luminoso. A abertura combina bergamota, limão e laranja, evoluindo para um coração frutado e um fundo envolvente de baunilha de Madagascar, almíscar branco e âmbar. Uma opção versátil para quem busca uma fragrância moderna, limpa e marcante.",
    price: 140.00,
    originalPrice: 140.00,
    image: philosPuraImg,
    imageContain: true,
    inStock: true,
    slug: "philos-pura-100ml",
  },
  {
    id: 20,
    gender: "masculino",
    active: true,
    name: "Liquid Brun EDP 100ml",
    brand: "French Avenue",
    description: "Amadeirado, Especiado, Baunilha, Masculino, Intenso",
    fullDescription: "Liquid Brun, da French Avenue, apresenta uma composição amadeirada, quente e sofisticada. A abertura combina canela, cardamomo, flor de azahar e bergamota, seguida por um coração cremoso de baunilha Bourbon e elemí. No fundo, praliné, almíscar, ambroxan e madeira de guaiaco criam uma assinatura envolvente e marcante. Uma fragrância de presença elegante, especialmente interessante para ocasiões noturnas e dias mais frescos.",
    price: 240.00,
    originalPrice: 240.00,
    image: liquidBrunImg,
    imageContain: true,
    inStock: true,
    slug: "liquid-brun-100ml",
  },
  {
    id: 21,
    gender: "unissex",
    active: true,
    name: "Marwa EDP 100ml",
    brand: "Arabiyat Prestige",
    description: "Cítrico, Aromático, Amadeirado, Unissex, Elegante",
    fullDescription: "Marwa, da Arabiyat Prestige, é uma fragrância unissex que combina frescor, elegância e profundidade. A abertura traz bergamota, petit grain e gengibre, criando uma saída vibrante e refrescante. No coração, gerânio, chá e incenso acrescentam um toque aromático e sofisticado. O fundo de madeira de guaiaco, ambroxan e almíscar proporciona uma finalização limpa, amadeirada e envolvente. Uma fragrância versátil para quem busca uma assinatura elegante e marcante.",
    price: 340.00,
    originalPrice: 340.00,
    image: marwaImg,
    inStock: true,
    slug: "marwa-edp-100ml",
  },
  {
    id: 22,
    gender: "masculino",
    active: true,
    name: "9PM EDP 100ml",
    brand: "Afnan",
    description: "Doce, Especiado, Baunilha, Masculino, Intenso",
    fullDescription: "Afnan 9PM é uma fragrância masculina marcante, doce e envolvente. A abertura combina maçã, bergamota, lavandim e canela, criando um início fresco e especiado. No coração, muguet e flor de azahar acrescentam um toque floral refinado. O fundo revela uma combinação quente e cremosa de baunilha, fava-tonka, âmbar e patchouli. Uma escolha especialmente interessante para noites, encontros e ocasiões em que uma fragrância de presença é desejada.",
    price: 180.00,
    originalPrice: 180.00,
    image: afnan9pmImg,
    imageContain: true,
    inStock: true,
    slug: "afnan-9pm-100ml",
  },
];

/**
 * Fonte única de verdade para a visibilidade de um produto.
 * Um produto sem `active` definido é considerado visível por padrão.
 */
export const isProductActive = (product: Product) => product.active !== false;

/**
 * Lista pública do catálogo — já filtrada por visibilidade.
 * Use SEMPRE esta lista em qualquer listagem pública
 * (vitrine, filtros, relacionados, destaques, busca).
 */
export const activeProducts: Product[] = products.filter(isProductActive);

/** Busca um produto ativo pelo id (retorna undefined se não existir ou estiver oculto). */
export const getActiveProductById = (id: number) =>
  activeProducts.find((p) => p.id === id);

export const WHATSAPP_NUMBER = "5598982568085";

export const generateWhatsAppLink = (product: Product) => {
  const message = encodeURIComponent(
    `Olá! Tenho interesse no perfume *${product.name}* da marca *${product.brand}* por R$${product.price.toFixed(2).replace('.', ',')}. Gostaria de mais informações para finalizar minha compra.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

// Link de consulta de perfumes fora do catálogo — reutiliza o mesmo número/integração do WhatsApp
export const generateWhatsAppConsultLink = () => {
  const message =
    "Olá! Não encontrei o perfume que procuro no site. Gostaria de consultar a disponibilidade.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
