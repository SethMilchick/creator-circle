export default function CountFollowers({ profileCards }) {
  const isFollowed = profileCards.filter((card) => card.followed);

  return (
    <section className="stats-bar">
      <div className="stats-bar__card">
        <span className="stats-bar__label">Profiles</span>
        <strong className="stats-bar__value">{profileCards.length}</strong>
      </div>

      <div className="stats-bar__card">
        <span className="stats-bar__label">Following</span>
        <strong className="stats-bar__value">{isFollowed.length}</strong>
      </div>
    </section>
  );
}
