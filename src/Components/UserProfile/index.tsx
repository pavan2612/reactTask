import "./userprofile.css"

export type UserProfileProps = {
    name: string,
    email: string,
    avatarUrl: string
}

export const UserProfile = ({ name, email, avatarUrl }: UserProfileProps) => {
    return (
        <div className="user-profile-container">
            <div className="user">
                <img src={avatarUrl} alt={name} />
            </div>
            <div>
                <h5>{name}</h5>
                <p>{email}</p>
            </div>
        </div>
    )
}