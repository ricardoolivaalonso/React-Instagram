import { v4 as uuidv4 } from 'uuid'
import LogoDesktop from '../img/logo-desktop.png'
import LogoMobile from '../img/logo-mobile.png'
// 
import Avatar from '../img/avatar.jpeg'  
import Post01 from '../img/post-01.jpg'
import Post02 from '../img/post-02.jpg'
import Post03 from '../img/post-03.jpg'
import Post04 from '../img/post-04.jpg'
import Post05 from '../img/post-05.jpg'
import Post06 from '../img/post-06.jpg'
import Post07 from '../img/post-07.jpg'
import Post08 from '../img/post-08.jpg'
import Post09 from '../img/post-09.jpg'
import Post10 from '../img/post-10.jpg'
import Post11 from '../img/post-11.jpg'
import Post12 from '../img/post-12.jpg'
import Post13 from '../img/post-13.jpg'
import Post14 from '../img/post-14.jpg'
import Post15 from '../img/post-15.jpg'
import Post16 from '../img/post-16.jpg'
import Post17 from '../img/post-17.jpg'
import Post18 from '../img/post-18.jpg'
// 
import Avatar01 from '../img/avatar-01.jpg'
import Avatar02 from '../img/avatar-02.jpg'
import Avatar03 from '../img/avatar-03.jpg'
import Avatar04 from '../img/avatar-04.jpg'
import Avatar05 from '../img/avatar-05.jpg'
import Avatar06 from '../img/avatar-06.jpg'
import Avatar07 from '../img/avatar-07.jpg'
import Avatar08 from '../img/avatar-08.jpg'
import Avatar09 from '../img/avatar-09.jpg'
import Avatar10 from '../img/avatar-10.jpg'
import Avatar11 from '../img/avatar-11.jpg'
import Avatar12 from '../img/avatar-12.jpg'
import Avatar13 from '../img/avatar-13.jpg'
import Avatar14 from '../img/avatar-14.jpg'
import Avatar15 from '../img/avatar-15.jpg'
import Avatar16 from '../img/avatar-16.jpg'
import Avatar17 from '../img/avatar-17.jpg'
import Avatar18 from '../img/avatar-18.jpg'

const initialNavbar = {
    logo: {
        desktop: LogoDesktop,
        mobile: LogoMobile
    },
    icons: [
        {
            uid: uuidv4(),
            svg: '<svg color=#262626 fill=#262626 height=24 viewBox="0 0 24 24" width=24><path d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z" fill=none stroke=currentColor stroke-linejoin=round stroke-width=2></path></svg>',
            url: '/',
        },
        {
            uid: uuidv4(),
            svg: '<svg color="#262626" fill="#262626" height="24" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>',
            // url: '/inbox',
            url: '#',
        },
        {
            uid: uuidv4(),
            svg: '<svg color="#262626" fill="#262626" height="24" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>',
            // url: '/create',
            url: '#',
        },
        {
            uid: uuidv4(),
            svg: '<svg color="#262626" fill="#262626" height="24" viewBox="0 0 24 24" width="24"><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon><polygon fill-rule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>',
            url: '/explore',
        },
        {
            uid: uuidv4(),
            svg: '<svg aria-label="Sección de actividad" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>',
            url: '#',
        },
    ]
}

const initialModalIcons = [
    {
        uid: uuidv4(),
        svg: '<svg color="#262626" fill="#262626" height="24" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>',
        href: '/',
    },
    {
        uid: uuidv4(),
        svg: '<svg color="#262626" fill="#262626" height="24" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>',
        href: '/',
    },
    {
        uid: uuidv4(),
        svg: '<svg color="#262626" fill="#262626" height="24" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>',
        href: '/',
    },
    {
        uid: uuidv4(),
        svg: '<svg color="#262626" fill="#262626" height="24" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>',
        href: '/',
    },
]

const initialModal = {
    open: false,
    uid: uuidv4(),
    username: 'ssss',
    media: '',
    description: '',
    liked: false,
    views: 0,
    time: '',
    comments: []
}

const initialProfilePosts = {
    icons: [
        {
            uid: uuidv4(),
            title: 'posts',
            svg: '<svg color="#262626" fill="#262626" height="12" viewBox="0 0 24 24" width="12"><rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>'
        },
        {
            uid: uuidv4(),
            title: 'videos',
            svg: '<svg color="#262626" fill="#262626" height="12" viewBox="0 0 24 24" width="12"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5zm5-11.8l-6.8-3.9c-.5-.3-1-.3-1.5 0-.4.3-.7.7-.7 1.3v7.8c0 .5.3 1 .8 1.3.2.1.5.2.8.2s.5-.1.8-.2l6.8-3.9c.5-.3.8-.8.8-1.3s-.5-1-1-1.3zm-7.5 5.2V8.1l6.8 3.9-6.8 3.9z"></path></svg>'
        },
        {
            uid: uuidv4(),
            title: 'saved',
            svg: '<svg color="#262626" fill="#262626" height="12" viewBox="0 0 24 24" width="12"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>'
        },
        {
            uid: uuidv4(),
            title: 'tagged',
            svg: '<svg color="#262626" fill="#262626" height="12" viewBox="0 0 24 24" width="12"><path d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>'
        }
    ]
}
// ========================
const initialPosts = [
    {
        uid: uuidv4(),
        username: 'ana.sacareno',
        media: Post01,
        description: 'What is the best concert you’ve ever attended? ',
        liked: false,
        views: 60,
        time: '222 days ago',
        comments: [
            {    
                uid: uuidv4(),
                username: 'r.watson',
                content: '1979, Alexandra Palace, the first proper rock gig I attended',
                time: '2hr ago'       
            },   
            {    
                uid: uuidv4(),
                username: 'penny.barbosa.98',
                content: 'David Bowie, 1983, Milton Keynes. The first time i saw Bowie was great.',
                time: '1hr ago'       
            },   
            {    
                uid: uuidv4(),
                username: 'mrandow.v.b',
                content: 'The Who, 1988, Wembley arena. I had low expectations because, although I loved the Who, I felt they were past their best. They absolutely rocked out.',
                time: '1hr ago'       
            }  
        ]
    },
    {
        uid: uuidv4(),
        username: 'ana.sacareno',
        media: Post02,
        description: 'Sculping wth Zbrush, I love it! ',
        liked: false,
        views: 105,
        time: '333 days ago',
        comments: [
            {    
                uid: uuidv4(),
                username: 'mary_adams',
                content: 'Oh, dude, amazing! So professional',
                time: '10hr ago'       
            },   
            {    
                uid: uuidv4(),
                username: 'penny.barbosa.98',
                content: 'You always publish a really cool and professional content! Thank you!',
                time: '10hr ago'       
            }  
        ]
    },
    {
        uid: uuidv4(),
        username: 'ana.sacareno',
        media: Post03,
        description: 'Always green! ',
        liked: false,
        views: 105,
        time: '2 days ago',
        comments: [
            {    
                uid: uuidv4(),
                username: 'miche_w',
                content: 'Dress to Impress',
                time: '10hr ago'       
            },   
            {    
                uid: uuidv4(),
                username: 'penny.barbosa.98',
                content: "it's ideal for any occasion!",
                time: '10hr ago'       
            }  
        ]
    },
    {
        uid: uuidv4(),
        username: 'ana.sacareno',
        media: Post04,
        description: 'Just Announced: New Vacation Destinations Coming Soon --',
        liked: false,
        views: 105,
        time: '2 days ago',
        comments: [
            {    
                uid: uuidv4(),
                username: 'miche_w',
                content: "That was amazing country. Really enjoy it. I'm definitely putting Switzerland on my list.",
                time: '10hr ago'       
            }
        ]
    },
    {
        uid: uuidv4(),
        username: 'ana.sacareno',
        media: Post05,
        description: "On the road again? can be exciting, educational, exhausting and energizing! And, the food you enjoy while traveling can be delicious and memorable. Check out more information how to keep food safe.",
        liked: false,
        views: 105,
        time: '2 days ago',
        comments: [
         
            {    
                uid: uuidv4(),
                username: 'dclark',
                content: 'my first experience with switzerland was when we were on our way home to germany from italy.',
                time: '10hr ago'       
            },  
            {    
                uid: uuidv4(),
                username: 'miche_w',
                content: 'I think if someone wants to go on a road trip through Switzerland',
                time: '10hr ago'       
            } 
        ]

    },
    {
        uid: uuidv4(),
        username: 'ana.sacareno',
        media: Post06,
        description: "You'll see more violence in any television crime series than you will in my films... Art is there to have a stimulating effect, if it earns its name. You have to be honest, that's the only thing.",
        liked: false,
        views: 105,
        time: '1 days ago',
        comments: [
            {    
                uid: uuidv4(),
                username: 'dclark',
                content: 'I love how this person took the time to model the toes and belly button despite the fact that they knew both would be covered up.',
                time: 'now'       
            }
        ]

    },
    {
        uid: uuidv4(),
        username: 'ana.sacareno',
        media: Post07,
        description: 'Yes I finally made it!',
        liked: false,
        views: 105,
        time: '2 days ago',
        comments: [
            {    
                uid: uuidv4(),
                username: 'john_tor.res',
                content: "I'm madly inlove with your digital 3d arts",
                time: 'now'       
            }
        ]

    },
    {
        uid: uuidv4(),
        username: 'ana.sacareno',
        media: Post08,
        description: 'If breakfast is the most important meal of the day, then start your day off right with this tantalizing tropical treat!',
        liked: false,
        views: 105,
        time: '1 days ago',
        comments: [
              {    
                uid: uuidv4(),
                username: 'r.i.t.a',
                content: 'It could be just be, but anything involving an oven is too hard to consider for breakfast lol',
                time: 'now'       
            }, 
        ]

    },
    {
        uid: uuidv4(),
        username: 'ana.sacareno',
        media: Post09,
        description: 'New! Simple, but oh so delicious! This rustic loaf of Whole Wheat Sourdough Fig and Walnut Bread is the perfect blend of flavors. Serve in the morning with your favorite cup of tea and a drizzle of honey!',
        liked: false,
        views: 105,
        time: '2 days ago',
        comments: [
              {    
                uid: uuidv4(),
                username: 'n_moreno02',
                content: "I made Apple French Toasts Roll Ups for my mum's birthday breakfast yesterday and they tasted amazing!",
                time: '1hr ago'       
            }, 
        ]

    },
    {
        uid: uuidv4(),
        username: 'ana.sacareno',
        media: Post10,
        description: 'Lightly seasoned chicken sautéed in a dreamy lemon butter pan sauce with wine and capers, then tossed with gluten-free gnocchi is the perfect Friday night dinner.',
        liked: false,
        views: 105,
        time: '2 days ago',
        comments: [
              {    
                uid: uuidv4(),
                username: 'john_tor.res',
                content: "After watching all of this..mm i think I'll eat cereal with some milk",
                time: '1hr ago'       
            }, 
        ]

    },
    // ===================
    {
        uid: uuidv4(),
        username: 'r.watson',
        media: Post11,
        description: 'How has exercise impacted your career?',
        liked: false,
        views: 105,
        time: '4 days ago',
        comments: [
            {    
                uid: uuidv4(),
                username: 'ana.sacareno',
                content: 'Please do a "for people who never done anything physical in their life" version',
                time: '10hr ago'       
            }
        ]
    },
    {
        uid: uuidv4(),
        username: 'penny.barbosa.98',
        media: Post12,
        description: 'Fun small waves!',
        liked: false,
        views: 105,
        time: '1 days ago',
        comments: [
            {    
                uid: uuidv4(),
                username: 'miche_w',
                content: 'I’m a surfer myself… but I have to say those are some massive waves',
                time: '10hr ago'       
            } 
        ]
    },
    {
        uid: uuidv4(),
        username: 'james.l',
        media: Post13,
        description: "I'll answer anything you want , If you dm me , I'm too bored , talk to me! ..",
        liked: false,
        views: 105,
        time: '4 days ago',
        comments: [
            {    
                uid: uuidv4(),
                username: 'miche_w',
                content: 'uwu',
                time: '10hr ago'       
            }  
        ]
    },
    {
        uid: uuidv4(),
        username: 'arlene.stone',
        media: Post14,
        description: "Warming up with the first cup of coffee for the day. There's a strong possibility I'll finish this first cup within the next 10 minutes.",
        liked: false,
        views: 105,
        time: '2 days ago',
        comments: [
            {    
                uid: uuidv4(),
                username: 'norma.ray',
                content: 'I love it!',
                time: '10hr ago'       
            } 
        ]
    },
    {
        uid: uuidv4(),
        username: 'mary_adams',
        media: Post15,
        description: 'Im already longing for a Subway and its only 10am !!',
        liked: false,
        views: 105,
        time: '2 days ago',
        comments: [
            {    
                uid: uuidv4(),
                username: 'norma.ray',
                content: 'Ahhh so nostalgic when a train comes back in New York City',
                time: '10hr ago'       
            } 
        ]
    },
    {
        uid: uuidv4(),
        username: 'miche_w',
        media: Post16,
        description: 'Are you looking to customize your skateboard?',
        liked: false,
        views: 105,
        time: '2 days ago',
        comments: [
            {    
                uid: uuidv4(),
                username: 'romanl1567',
                content: 'The current of skateboarding is already superhuman.',
                time: '10hr ago'       
            } 
        ]
    },
    {
        uid: uuidv4(),
        username: 'mrandow.v.b',
        media: Post17,
        description: 'Was this your families reaction to finding out your passport is expired before the big family trip?',
        liked: false,
        views: 105,
        time: '2 days ago',
        comments: [
            {    
                uid: uuidv4(),
                username: 're.law18',
                content: 'hahahahahaha xD',
                time: '10hr ago'       
            } 
        ]
    },
    {
        uid: uuidv4(),
        username: 's.mith.j',
        media: Post18,
        description: 'this adorable fox needs you, share this picture so she could find a new and warm home. thanks ya all !',
        liked: false,
        views: 105,
        time: '2 days ago',
        comments: [
            {    
                uid: uuidv4(),
                username: '3stell.4m',
                content: 'awww lovable!',
                time: '10hr ago'       
            } 
        ]
    },
]

const initialPostsSearched = [

]

const initialUser = {
    username: 'ana.sacareno',
    name: 'Ana Sacareno',
    avatar: Avatar,
    bio: 'Traveler | Musician | Catlover',
    description: 'I just a simple human :D ',
    portfolio: 'https://codepen.io/ricardoolivaalonso',
    stats: {
        followers: [
            's.mith.j',
            'mrandow.v.b',
            'miche_w',
            'mary_adams',
            'arlene.stone',
            'james.l',
            'penny.barbosa.98',
            'r.watson',
        ],
        following: [
            's.mith.j',
            'mrandow.v.b',
            'miche_w',
            'mary_adams',
            'arlene.stone',
            'james.l',
        ]
    }
}

const userPost = initialPosts.filter( post => post.username === initialUser.username)
initialUser.stats.posts = userPost

const initialUsers = [
    {

        username: 'ana.sacareno',
        name: 'Ana Sacareno',
        avatar: Avatar,
        bio: 'Traveler | Musician | Catlover',
        description: 'I just a simple human :D ',
        portfolio: 'https://codepen.io/ricardoolivaalonso',
        stats: {
            followers: [
                's.mith.j',
                'mrandow.v.b',
                'miche_w',
                'mary_adams',
                'arlene.stone',
                'james.l',
                'penny.barbosa.98',
                'r.watson',
            ],
            following: [
                's.mith.j',
                'mrandow.v.b',
                'miche_w',
                'mary_adams',
                'arlene.stone',
                'james.l',
            ]
        }
    },
    {
        username: 'r.watson',
        name: 'R. Watson',
        avatar: Avatar01,
        bio: 'Im R. Watson',
        description: 'I just a simple human :D ',
        portfolio: 'https://codepen.io/ricardoolivaalonso',
        stats: {
            followers: [
                
            ],
            following: [
               
            ]
        }
    },
    {
        username: 'penny.barbosa.98',
        name: 'Penny Barbosa',
        avatar: Avatar02,
        bio: 'Im Penny Barbosa',
        description: 'I just a simple human :D ',
        portfolio: 'https://codepen.io/ricardoolivaalonso',
        stats: {
            followers: [
                
            ],
            following: [
             
            ]
        }
    },
    {
        username: 'james.l',
        name: 'James L.',
        avatar: Avatar03,
        bio: 'Im James L.',
        description: 'I just a simple human :D ',
        portfolio: 'https://codepen.io/ricardoolivaalonso',
        stats: {
            followers: [
                'ana.sacareno'
            ],
            following: [
             
            ]
        }
    },
    {
        username: 'arlene.stone',
        name: 'Arlen Stone',
        avatar: Avatar04,
        bio: 'Im Arlen Stone',
        description: 'I just a simple human :D ',
        portfolio: 'https://codepen.io/ricardoolivaalonso',
        stats: {
            followers: [
                'ana.sacareno'
            ],
            following: [
             
            ]
        }
    },
    {
        username: 'mary_adams',
        name: 'Mary Adams',
        avatar: Avatar05,
        bio: 'Im Mary Adams',
        description: 'I just a simple human :D ',
        portfolio: 'https://codepen.io/ricardoolivaalonso',
        stats: {
            followers: [
                'ana.sacareno'
            ],
            following: [
             
            ]
        }
    },
    {
        username: 'miche_w',
        name: 'Michelle W.',
        avatar: Avatar06,
        bio: 'Im Michelle W.',
        description: 'I just a simple human :D ',
        portfolio: 'https://codepen.io/ricardoolivaalonso',
        stats: {
            followers: [
                'ana.sacareno'
            ],
            following: [
             
            ]
        }
    },
    {
        username: 'mrandow.v.b',
        name: 'Brandow VB',
        avatar: Avatar07,
        bio: 'Im Brandow VB.',
        description: 'I just a simple human :D ',
        portfolio: 'https://codepen.io/ricardoolivaalonso',
        stats: {
            followers: [
                'ana.sacareno'
            ],
            following: [
             
            ]
        }
    },
    {
        username: 's.mith.j',
        name: 'J Smith',
        avatar: Avatar08,
        bio: 'Im J Smith.',
        description: 'I just a simple human :D ',
        portfolio: 'https://codepen.io/ricardoolivaalonso',
        stats: {
            followers: [
                'ana.sacareno'
            ],
            following: [
             
            ]
        }
    },
    // =============

    {
        username: 'john_tor.res',
        name: 'John Torres',
        avatar: Avatar09,
        bio: 'Im John Torres.',
        description: 'I just a simple human :D ',
        portfolio: 'https://codepen.io/ricardoolivaalonso',
        stats: {
            followers: [
             
            ],
            following: [
             
            ]
        }
    },
    {
        username: 'n_moreno02',
        name: 'Nancy Moreno',
        avatar: Avatar10,
        bio: 'Im Nancy Moreno.',
        description: 'I just a simple human :D ',
        portfolio: 'https://codepen.io/ricardoolivaalonso',
        stats: {
            followers: [
             
            ],
            following: [
             
            ]
        }
    },
    {
        username: 'peter_morgan6',
        name: 'Morgan Peter',
        avatar: Avatar11,
        bio: 'Im Morgan Peter.',
        description: 'I just a simple human :D ',
        portfolio: 'https://codepen.io/ricardoolivaalonso',
        stats: {
            followers: [
             
            ],
            following: [
             
            ]
        }
    },
    {
        username: 'r.i.t.a',
        name: 'Rita',
        avatar: Avatar12,
        bio: 'Im Rita.',
        description: 'I just a simple human :D ',
        portfolio: 'https://codepen.io/ricardoolivaalonso',
        stats: {
            followers: [
             
            ],
            following: [
             
            ]
        }
    },
    {
        username: 'dclark',
        name: 'D Clark',
        avatar: Avatar13,
        bio: 'Im D Clark.',
        description: 'I just a simple human :D ',
        portfolio: 'https://codepen.io/ricardoolivaalonso',
        stats: {
            followers: [
             
            ],
            following: [
             
            ]
        }
    },
    {
        username: '3stell.4m',
        name: 'Estella M',
        avatar: Avatar14,
        bio: 'Im Estella M',
        description: 'I just a simple human :D ',
        portfolio: 'https://codepen.io/ricardoolivaalonso',
        stats: {
            followers: [
             
            ],
            following: [
             
            ]
        }
    },
    {
        username: 're.law18',
        name: 'Rene Lawrence',
        avatar: Avatar15,
        bio: 'Im Rene Lawrence.',
        description: 'I just a simple human :D ',
        portfolio: 'https://codepen.io/ricardoolivaalonso',
        stats: {
            followers: [
             
            ],
            following: [
             
            ]
        }
    },
    {
        username: 'romanl1567',
        name: 'Roman L.',
        avatar: Avatar16,
        bio: 'Im Roman L.',
        description: 'I just a simple human :D ',
        portfolio: 'https://codepen.io/ricardoolivaalonso',
        stats: {
            followers: [
             
            ],
            following: [
             
            ]
        }
    },
    {
        username: 'c_brad.ley',
        name: 'Chris Bradley',
        avatar: Avatar17,
        bio: 'Im Chris Bradley',
        description: 'I just a simple human :D ',
        portfolio: 'https://codepen.io/ricardoolivaalonso',
        stats: {
            followers: [
             
            ],
            following: [
             
            ]
        }
    },
    {
        username: 'norma.ray',
        name: 'Norma R. Ray',
        avatar: Avatar18,
        bio: 'Im Norma R. Ray',
        description: 'I just a simple human :D ',
        portfolio: 'https://codepen.io/ricardoolivaalonso',
        stats: {
            followers: [
             
            ],
            following: [
             
            ]
        }
    }

]

export { 
    initialUser, 
    initialUsers, 
    initialNavbar, 
    initialProfilePosts, 
    initialPosts,
    initialModal,
    initialModalIcons,
    initialPostsSearched
}