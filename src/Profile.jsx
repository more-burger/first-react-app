import { Avatar } from './Avatar.jsx';

function Card({ children }) {
    return (
      <div className="card">
        {children}
      </div>
    );
  }

  export default function Profile() {
    return (
    <Card>
        <Avatar
          size={100}
          person={{ 
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
          }}
        />
      </Card>
    );
  }


// https://react.dev/learn/passing-props-to-a-component