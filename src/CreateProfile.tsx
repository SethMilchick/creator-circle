import type { Dispatch, FormEvent, SetStateAction } from 'react';
import Button from './Button';

type CreateProfileProps = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  job: string;
  setJob: Dispatch<SetStateAction<string>>;
  hobby: string;
  setHobby: Dispatch<SetStateAction<string>>;
};

export default function CreateProfile({
  handleSubmit,
  name,
  setName,
  job,
  setJob,
  hobby,
  setHobby,
}: CreateProfileProps) {
  return (
    <section className="profile-form">
      <div className="profile-form__header">
        <h2 className="profile-form__title">Create profile</h2>
        <p className="profile-form__text">
          Add someone new to the community board.
        </p>
      </div>

      <form className="profile-form__body" onSubmit={handleSubmit}>
        <div className="profile-form__group">
          <label className="profile-form__label" htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            className="profile-form__input"
            type="text"
            placeholder="John Smith..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="profile-form__group">
          <label className="profile-form__label" htmlFor="job">
            Your job
          </label>
          <input
            id="job"
            className="profile-form__input"
            type="text"
            placeholder="Carpenter..."
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </div>

        <div className="profile-form__group">
          <label className="profile-form__label" htmlFor="hobby">
            Your hobby
          </label>
          <input
            id="hobby"
            className="profile-form__input"
            type="text"
            placeholder="Climbing..."
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
          />
        </div>

        <Button className="button button--primary" type="submit">
          Create profile
        </Button>
      </form>
    </section>
  );
}
