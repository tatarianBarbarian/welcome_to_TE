import { Fragment, memo, useRef } from 'react';

const MainComponent = ({
    user
}) => {
    // default value for `props.user`
    const {current: defaultUser} = useRef({ name: 'unknown', age: null })

    return (
        <Fragment>
            <ChildComponent user={user || defaultUser} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ user: { name, age } }) => {
    return (
        <div>user name: {name}, user age: {age}</div>
    )
});
