import { Avatar, Button, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import * as EmailValidator from 'email-validator';

function Sidebar() {

    const createChat = () =>{
        const input = prompt(
            'Please enter an email address or the user you wish to chat with'
            );

            if (!input) return null;

            if (EmailValidator.validate(input)){
                // We need to add the chat into the DB 'chats' collection
            }
    }

    return (
        <Container>
            <Header>
                <UserAvatar />
                <IconsContainer>
                    <IconButton>
                    <ChatIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                </IconsContainer>
            </Header>
            <Search>
                <SearchIcon />
                <SearchInput placeholder='Search'/>
            </Search>
            <SidebarButton onclick={createChat}>
                Start a Chat
            </SidebarButton>
            {/*List of chats */}
        </Container>
    )
}

export default Sidebar;

const Container = styled.div``;

const Search = styled.div`
display: flex;
align-items: center;
padding: 20px;
border-radius: 50%;
`;

const SearchInput = styled.input`
outline-width: 0;
border: none;
flex: 1;
`;

const SidebarButton = styled(Button)`
&&&{
    border-bottom: 1.5px solid whitesmoke;
border-top: 1.5px solid whitesmoke;
}
`;

const Header = styled.div`
display: flex;
position: sticky;
top: 0;
z-index: 1;
background-color: white;
justify-content: space-between;
align-items: center;
padding: 15px;
height: 80px;
border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
cursor: pointer;

:hover{
    opacity: 0.7s;
}
`;

const IconsContainer = styled.div``;