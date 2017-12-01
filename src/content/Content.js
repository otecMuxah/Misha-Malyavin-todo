import { User } from '../User/User';

export const Content = () =>
  (
    <div className="content">
      <Greeting name="Misha" />
      <User name="Misha" surname="Petrov" age="28" />
    </div>
  );


