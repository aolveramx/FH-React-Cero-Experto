import { useMemo } from "react"
import { useParams, Redirect } from 'react-router-dom'
import { heroImages } from "../../helpers/heroImages"
import { getHeroById } from "../../selectors/getHeroById"

const HeroScreen = ({ history }) => {

  const { heroId } = useParams()

  const hero = useMemo(() => getHeroById( heroId ), [ heroId ])

  if ( !hero ) {
    return <Redirect to ="/" />
  }

  const handleReturn = () => {

    if (history.length <= 2) {
      history.push('/')
    } else {
      history.goBack()
    }

  }

  const {
    superhero,
    alter_ego,
    publisher,
    first_appearance,
    characters,
  } = hero

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          // src={ `../assets/heroes/${heroId}.jpg` } // desde public/assets
          // src={ batman } // import
          src={ heroImages(`./${ heroId }.jpg`).default }
          className="img-thumbnail animate__animated animate__fadeInLeft" 
          alt={ superhero }
        />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{ superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego: </b> { alter_ego }
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> { publisher }
          </li>
          <li className="list-group-item">
            <b>Alter Ego: </b> { first_appearance }
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{ characters }</p>

        <button 
          className="btn btn-outline-info"
          onClick={handleReturn}
        >
          Return
        </button>
      </div>
    </div>
  )
}

export default HeroScreen
