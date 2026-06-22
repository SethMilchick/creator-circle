import ProfileCard from './ProfileCard';
import type { Profile } from './types';

type ProfileListProps = {
  profileCards: Profile[];
  handleToggle: (id: string) => void;
};

export default function ProfileList({
  profileCards,
  handleToggle,
}: ProfileListProps) {
  return (
    <ul className="profile-list">
      {profileCards.map((item) => (
        <ProfileCard item={item} key={item.id} handleToggle={handleToggle} />
      ))}
    </ul>
  );
}
