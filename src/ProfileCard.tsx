import Button from './Button';
import type { Profile } from './types';

type ProfileCardProps = {
  item: Profile;
  handleToggle: (id: string) => void;
};

export default function ProfileCard({ item, handleToggle }: ProfileCardProps) {
  return (
    <li className="profile-card">
      <div className="profile-card__top">
        <img
          className="profile-card__avatar"
          src={item.image}
          alt={item.name}
          width="72"
          height="72"
        />

        <div className="profile-card__copy">
          <h3 className="profile-card__name">{item.name}</h3>
          <p className="profile-card__job">{item.job}</p>
        </div>
      </div>

      <div className="profile-card__meta">
        <span className="profile-card__tag">Hobby</span>
        <p className="profile-card__hobby">{item.hobby}</p>
      </div>

      <Button
        className={`button ${
          item.followed ? 'button--following' : 'button--follow'
        }`}
        type="button"
        onClick={() => handleToggle(item.id)}
      >
        {item.followed ? 'Following' : 'Follow'}
      </Button>
    </li>
  );
}
