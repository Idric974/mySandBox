import { Client } from 'linkedin-web-api';

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const proxy = process.env.PROXY;

(async () => {
    // Login
    const client = new Client();
    await client.login.userPass({ username, password, proxy });

    // search for companies
    const companiesScroller = await client.search.searchCompanies({ keywords: 'Microsoft' });
    const [{ company: microsoft }] = await companiesScroller.scrollNext();

    // Search for profiles and send an invitation
    const peopleScroller = await client.search.searchPeople({
        keywords: 'Bill Gates',
        filters: {
            pastCompany: microsoft.companyId,
        },
    });
    const [{ profile: billGates }] = await peopleScroller.scrollNext();

    await client.invitation.sendInvitation({
        profileId: billGates.profileId,
        trackingId: billGates.trackingId,
    });

    // Search in my connections
    const ownConnectionsScroller = await client.search.searchOwnConnections({ keywords: 'Bill Gates', limit: 1 });
    const connections = await ownConnectionsScroller.scrollNext();

    // Get conversation
    const [billConversation] = await client.conversation
        .getConversations({
            recipients: billGates.profileId,
        })
        .scrollNext();

    const conversationMessages = await client.message
        .getMessages({
            conversationId: billConversation.conversationId,
        })
        .scrollNext();

    // Send a message
    const sentMessage = await client.message.sendMessage({
        profileId: billGates.profileId,
        text: 'Hey Bill!',
    });
})();
