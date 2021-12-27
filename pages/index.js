import { createClient } from "contentful"
import RecipeCard from "../components/RecipeCard"

export async function getStaticProps(){
  // create connection
  const client = createClient({
    space: 'j1hoccm4gkag',
    accessToken: 'Dd8jiG1SdHcRqTKfyr-CBTOlKtJD2OBNz4xdJ0Kz6PA',
  })

  const res = await client.getEntries({
    content_type: 'recipe'
  })

  return{
    props:{
      recipes: res.items,
      // ISR : 
      revalidate: 1,
    }
  }  

}


export default function Recipes({recipes}) {
  console.log(recipes)
  return (
    <div className="recipe-list">
      {recipes.map((recipe)=>(
        <RecipeCard className="recipe" key={recipe.sys.id} recipe={recipe}/>
      ))}
      <style jsx>{`
        .recipe-list{
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  )
}