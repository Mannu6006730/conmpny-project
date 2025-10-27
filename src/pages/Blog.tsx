import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Best Gift Cards for the Holiday Season",
      excerpt: "Discover the most popular gift cards that make perfect presents for your loved ones this holiday season.",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      category: "Gift Ideas",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop"
    },
    {
      title: "How to Choose the Perfect Corporate Gift Cards",
      excerpt: "A comprehensive guide to selecting gift cards for corporate gifting and employee rewards programs.",
      author: "Michael Chen",
      date: "December 10, 2024",
      category: "Business",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
      title: "Digital vs Physical Gift Cards: Which is Better?",
      excerpt: "Compare the benefits of digital and physical gift cards to make the right choice for your gifting needs.",
      author: "Emily Davis",
      date: "December 5, 2024",
      category: "Tips",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
    },
    {
      title: "Security Tips for Online Gift Card Purchases",
      excerpt: "Learn how to safely purchase gift cards online and protect yourself from fraud and scams.",
      author: "David Wilson",
      date: "November 28, 2024",
      category: "Security",
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=400&h=300&fit=crop"
    },
    {
      title: "Top 5 Entertainment Gift Cards for Movie Lovers",
      excerpt: "Perfect gift cards for entertainment enthusiasts who love movies, music, and streaming services.",
      author: "Lisa Thompson",
      date: "November 20, 2024",
      category: "Entertainment",
      image: "https://images.unsplash.com/photo-1489599735734-79b4f9360dcc?w=400&h=300&fit=crop"
    },
    {
      title: "Gift Card Trends to Watch in 2025",
      excerpt: "Explore the latest trends in the gift card industry and what to expect in the coming year.",
      author: "Alex Rivera",
      date: "November 15, 2024",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=300&fit=crop"
    }
  ];

  const categories = ["All", "Gift Ideas", "Business", "Tips", "Security", "Entertainment", "Trends"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights about gift cards and digital gifting.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge 
              key={category}
              variant={category === "All" ? "default" : "secondary"}
              className={category === "All" ? "bg-gift-primary text-white" : "bg-muted hover:bg-gift-primary/10 cursor-pointer"}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="border-0 bg-gradient-card shadow-card-hover mb-12">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-[16/10] lg:aspect-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover rounded-l-lg"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="bg-gift-primary/10 text-gift-primary w-fit mb-4">
                  Featured
                </Badge>
                <h2 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                </div>
                <Button className="w-fit bg-gradient-primary hover:bg-gradient-primary hover:opacity-90">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Card key={index} className="border-0 bg-gradient-card shadow-card-hover overflow-hidden">
              <div className="aspect-[16/10]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-muted text-xs">
                    {post.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Button variant="ghost" className="w-full justify-between p-0 h-auto hover:text-gift-primary">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;