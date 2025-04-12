# Blog Dashboard

A simple blog dashboard built with Next.js, Material-UI, TypeScript, and RTK Query.

## Features

- View a list of blog posts with titles, authors, and excerpts
- Read individual blog posts on dedicated pages
- Create new blog posts
- Responsive design that works on both desktop and mobile devices
- Server-side rendering for improved performance and SEO
- Proper loading states and error handling

## Tech Stack

- **Next.js** - React framework with server-side rendering
- **Material-UI** - Component library for a consistent UI design
- **TypeScript** - For type safety across the application
- **RTK Query** - For efficient API data fetching and caching
- **JSONPlaceholder** - Mock API for blog posts

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/blog-dashboard.git
   cd blog-dashboard
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application


## Design Decisions

1. **SSR with Next.js**: I used Next.js App Router for server-side rendering to improve initial page load performance and SEO.

2. **Material-UI**: I chose Material-UI for a consistent, responsive design system that works well on all device sizes. The custom theme provides a unique look while maintaining Material Design principles.

3. **RTK Query**: For data fetching, I implemented RTK Query to handle caching, loading states, and automatic refetching efficiently. This simplifies state management and provides a better developer experience.

4. **TypeScript**: I defined clear interfaces for the blog post data structure to ensure type safety throughout the application.

5. **Component Structure**: The application is organized with reusable components (like PostCard) to maintain DRY principles and improve maintainability.

## Challenges Faced

1. **JSONPlaceholder API Limitations**: The JSONPlaceholder API doesn't have an author field, so I had to transform the response to add author information based on userId.

2. **Server Components vs. Client Components**: Finding the right balance between Next.js server and client components required careful consideration.

3. **Form Validation**: Implementing proper form validation while maintaining a good user experience required extra attention.


## Future Improvements

- Add pagination or infinite scrolling for the blog post list
- Implement authentication for creating and editing posts
- Add unit tests for components and API calls
- Add comment functionality to blog posts
- Implement search and filtering options

## License

This project is licensed under the MIT License.