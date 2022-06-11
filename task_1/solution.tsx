import {memo, Component, PureComponent} from 'react';

type IUser = {
    name: string
    age: number
}

type IProps = {
    user: IUser
}

const isSameUser = (user1: IUser, user2: IUser) => {
  const areNamesEqual = user1.name === user2.name;
  const areAgesEqual = user1.age === user2.age;

  return areNamesEqual && areAgesEqual;
};

export const FirstComponent = memo(({ name, age }: IUser) => {
  console.log("FirstComponent has been updated");

  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
});

const SecondComponentImpl = memo(({ userName, age }) => {
  console.log("SecondComponent has been updated");

  return (
    <div>
      my name is {userName}, my age is {age}
    </div>
  );
});

export const SecondComponent = ({ user: { name, age } }: IProps) => (
  <SecondComponentImpl userName={name} age={age} />
);

const AlternativeSecondComponentImpl = ({ user: { name, age } }: IProps) => {
  console.log("SecondComponent has been updated");

  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
};

export const AlternativeSecondComponent = memo(
  AlternativeSecondComponentImpl,
  (prevProps, nextProps) => isSameUser(prevProps.user, nextProps.user)
);

export class ThirdComponent extends PureComponent<IUser> {
  render() {
    console.log("ThirdComponent has been updated");

    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

export class FourthComponent extends Component<IProps> {
  shouldComponentUpdate({ user: nextUser }) {
    return !isSameUser(nextUser, this.props.user);
  }

  render() {
    console.log("FourthComponent has been updated");

    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
}
