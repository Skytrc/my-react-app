import { getImageUrl } from "../Utils/utils";

const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

export default function List() {
    const chemists = people.filter(people => 
        personalbar.profession === 'chemist'    
    );

    const listItems = chemists.map(person => 
        <li>
            <img 
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                
            </p>
        </li>  
    );
}