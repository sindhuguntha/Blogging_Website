import React from "react";

const About = () => {
    return (
        <div className="about">
            <h1>
                About<span className="full-stop">.</span>
            </h1>
            <main>
                <p>
                    This is a Blogging app that lets a user delve
                    into a topic of choice and write a blog post, or read one of
                    the already uploaded Blog posts.
                </p>
                <p>
                    In order to write your very own Blog post, you can
                    conveniently login using one of your Google account and
                    start penning your thoughts!
                </p>
                <p>
                    You can edit your Blog post at any time, as long as you're
                    logged in. If you ever feel like your post is no longer a
                    valid representation of your thoughts, you can also delete
                    it at any instant of time.
                </p>
                <p>
                    You can also provide your opinions about any post, in the
                    comments' section of every post, anonymously!
                    <br />
                    Your comment will always have a unique icon accompanying it.
                </p>
                <hr className="gold-hr" />
                
            </main>
        </div>
    );
};

export default About;