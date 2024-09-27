import getImageUrl from './utils.js';

export function Avatar({ person, size = 100 }) {

    return (
        <img
            className="avatar"
            src={getImageUrl(person.imageId)}
            alt={person.name}
            width={size}
            height={size} />
    );
}
