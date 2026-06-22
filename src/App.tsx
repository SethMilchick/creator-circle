import { useState, type FormEvent } from 'react';
import CreateProfile from './CreateProfile';
import ProfileList from './ProfileList';
import CountFollowers from './CountFollowers';
import type { Profile } from './types';

const initialCards: Profile[] = [
  {
    id: crypto.randomUUID(),
    image: 'https://i.pravatar.cc/48?u=118836',
    name: 'John Black',
    job: 'Plumber',
    hobby: 'Dancing',
    followed: false,
  },
  {
    id: crypto.randomUUID(),
    image: 'https://i.pravatar.cc/48?u=123111',
    name: 'Diana Wilson',
    job: 'Teacher',
    hobby: 'Sky diving',
    followed: true,
  },
];

export default function App() {
  const [profileCards, setProfileCards] = useState<Profile[]>(initialCards);
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [hobby, setHobby] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !job || !hobby) return;

    const newCard: Profile = {
      id: crypto.randomUUID(),
      image: `https://i.pravatar.cc/96?u=${Date.now()}`,
      name,
      job,
      hobby,
      followed: false,
    };

    setProfileCards((currentCards) => [...currentCards, newCard]);

    setName('');
    setJob('');
    setHobby('');
  }

  function handleToggle(id: string) {
    setProfileCards((cards) =>
      cards.map((card) =>
        card.id === id ? { ...card, followed: !card.followed } : card,
      ),
    );
  }

  return (
    <main className="directory-app">
      <section className="hero">
        <p className="hero__eyebrow">Community directory</p>
        <h1 className="hero__title">Find people worth following</h1>
        <p className="hero__text">
          A small React project for creating profiles, following creators, and
          tracking community connections.
        </p>
      </section>

      <CountFollowers profileCards={profileCards} />

      <section className="layout-grid">
        <CreateProfile
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          job={job}
          setJob={setJob}
          hobby={hobby}
          setHobby={setHobby}
        />

        <section className="directory-panel">
          <div className="directory-panel__header">
            <h2 className="directory-panel__title">People</h2>
            <p className="directory-panel__text">
              Browse the directory and follow the people you find interesting.
            </p>
          </div>

          <ProfileList
            profileCards={profileCards}
            handleToggle={handleToggle}
          />
        </section>
      </section>
    </main>
  );
}
