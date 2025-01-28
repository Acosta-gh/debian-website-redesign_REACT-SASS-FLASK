import React from 'react'
import NewsCard from '../shared/NewsCard';
import debiansvg__logo from "../../assets/images/debian.svg";

const NewsSection = () => {
    return (
        <section className='home-content-news'>
            <img src={debiansvg__logo} alt="Debian Logo" className="home-content-news__logo" />
            <h2 className="home-content-news__title">
                What's new in Debian 12
            </h2>
            <p className='home-content-news__text'>
                The new release of Debian includes significantly more software than its predecessor, Bullseye, with over 11,089 new packages, bringing the total to over 64,419 packages. More than 43,254 packages have been updated, which accounts for 67% of all packages in Bullseye. Additionally, over 6,296 packages (10% of those in Bullseye) have been removed for various reasons, and these will be marked as "obsolete" in package management front-ends.        </p>
            <div className='home-content-news__cards'>
                <NewsCard
                    title="Updated Debian 12: 12.9 released"
                    description="The Debian project is pleased to announce the ninth update of its stable distribution Debian 12. This point release mainly adds corrections for security issues, along with a few adjustments for serious problems. Security advisories have already been published separately and are referenced where available."
                    imageUrl="https://picsum.photos/seed/picsum/600"
                    date="January 11th, 2025"
                />
                <NewsCard
                    title="Updated Debian 11: 11.11 released"
                    description="The Debian project is pleased to announce the eleventh and final update of its oldstable distribution Debian 11. This point release mainly adds corrections for security issues, along with a few adjustments for serious problems. Security advisories have already been published separately and are referenced where available."
                    imageUrl="https://picsum.photos/seed/picsum/600"
                    date="August 31st, 2024"
                />
                <NewsCard
                    title="Security support for Bullseye handed over to the LTS team"
                    description=" As of 14 August 2024, three years after the initial release, the regular security support for Debian 11, comes to an end. The Debian Long Term Support (LTS) Team will take over security support from the Security and the Release Teams. "
                    imageUrl="https://picsum.photos/seed/picsum/600"
                    date="August 14th, 2024"
                />
            </div>
        </section>
    )
}

export default NewsSection