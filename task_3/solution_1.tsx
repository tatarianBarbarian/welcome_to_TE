import { Fragment, memo } from 'react';

const defaultUser = { name: 'unknown', age: null } // default value for `props.user`

const MainComponent = ({
    user = defaultUser
}) => {
    return (
        <Fragment>
            <ChildComponent user={user} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ user: { name, age } }) => {
    return (
        <div>user name: {name}, user age: {age}</div>
    )
});
