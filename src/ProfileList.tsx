import ProfileCard from './ProfileCard';

export default function ProfileList({ profileCards, handleToggle }) {
  return (
    <ul className="profile-list">
      {profileCards.map((item) => (
        <ProfileCard item={item} key={item.id} handleToggle={handleToggle} />
      ))}
    </ul>
  );
}
