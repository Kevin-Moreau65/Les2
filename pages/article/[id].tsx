import Image from 'next/image'
type article = {
  _id: string
  nom: string
  prix: string
  image: string
}
type commercial = {
  _id: string
  description: string
  image1: string
  image2: string
  image3: string
  pdf: string
}
type props = {
  article: article
  commercial: commercial
}
const Post = ({ article, commercial }: props) => {

  return <div>
    <h1>{article.nom}</h1>
    <h2 style={{ color: "var(--accent-color)" }}>{article.prix}</h2>
    <Image src={`http://les2api.30d7d9e7b2014052a7b4.francecentral.aksapp.io/media/${article.image}`} alt={'Image de présentation'} width={'400px'} height={'200px'}></Image>
    <Image src={`http://les2api.30d7d9e7b2014052a7b4.francecentral.aksapp.io/media/${commercial.image1}`} alt={'Image de présentation'} width={'400px'} height={'200px'}></Image>
    <Image src={`http://les2api.30d7d9e7b2014052a7b4.francecentral.aksapp.io/media/${commercial.image2}`} alt={'Image de présentation'} width={'400px'} height={'200px'}></Image>
    <Image src={`http://les2api.30d7d9e7b2014052a7b4.francecentral.aksapp.io/media/${commercial.image3}`} alt={'Image de présentation'} width={'400px'} height={'200px'}></Image>
    <p>{commercial.description}</p>
    <a style={{ color: "var(--accent-color)" }} href={`http://les2api.30d7d9e7b2014052a7b4.francecentral.aksapp.io/media/${commercial.pdf}`} download>Consulter la fiche technique</a>
  </div>
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '6264209f69653e07f30ba550' } }
    ],
    fallback: true
  };
}
type context = {
  params: {
    id: string
  }
}
export async function getStaticProps(context: context) {
  const { id } = context.params
  const res = await fetch(`http://les2api.30d7d9e7b2014052a7b4.francecentral.aksapp.io/article/${id}`)
  const { data } = await res.json()
  console.log(data.article.article);
  return {
    props: {
      article: { ...data.article.article },
      commercial: { ...data.commercial.commercial }
    },
    revalidate: 10,
  }
}

export default Post