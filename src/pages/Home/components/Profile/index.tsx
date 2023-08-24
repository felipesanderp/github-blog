import {
  FaBuilding,
  FaGithub,
  FaUserGroup,
  FaUpRightFromSquare,
} from 'react-icons/fa6'

import {
  ProfileContainer,
  UserInfo,
  ProfileTitle,
  UserInfoIcons,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/felipesanderp.png" alt="Felipe Sander" />

      <UserInfo>
        <ProfileTitle>
          <h3>Felipe Sander</h3>
          <a
            target="_blank"
            rel="stylesheet noreferrer"
            href="https://github.com/felipesanderp"
          >
            GITHUB
            <FaUpRightFromSquare />
          </a>
        </ProfileTitle>
        <span>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </span>

        <UserInfoIcons>
          <span>
            <FaGithub />
            felipesanderp
          </span>

          <span>
            <FaBuilding />
            Rocketseat
          </span>

          <span>
            <FaUserGroup />
            32 seguidores
          </span>
        </UserInfoIcons>
      </UserInfo>
    </ProfileContainer>
  )
}
