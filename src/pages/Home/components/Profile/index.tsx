import { FaBuilding, FaGithub, FaUserGroup } from 'react-icons/fa6'

import { ProfileContainer, UserInfo, UserInfoIcons } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/felipesanderp.png" alt="Felipe Sander" />

      <UserInfo>
        <h3>Felipe Sander</h3>
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
