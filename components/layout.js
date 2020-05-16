/* This file is part of iDecryptIt.
 * Copyright (c) 2020 Cole Johnson
 * 
 * This program is free software: you can redistribute it and/or modify it under
 *   the terms of the GNU Affero General Public License as published by the Free
 *   Software Foundation, either version 3 of the License, or (at your option)
 *   any later version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 *   ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 *   FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License
 *   for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License along
 *   with this program. If not, see <https://www.gnu.org/licenses/>.
 */
import { Container, Nav, Navbar } from "react-bootstrap";

import Head from "next/head";
import Link from "next/link";

export default (props) => {
    return (
        <>
            <Head>
                {props.title ?
                    <title>iDecryptIt - {props.title}</title> :
                    <title>iDecryptIt</title>
                }
                {props.description ?
                    <meta name="description" content={props.description} /> :
                    null
                }
                {props.keywords ?
                    <meta name="keywords" content={props.keywords} /> :
                    null
                }
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
            </Head>
            <header>
                <Navbar bg="light" expand="xl">
                    <Link href="/">
                        <a className="navbar-brand">
                            <img src="/img/logo@32.png" width="32" height="32" alt="" />
                            iDecryptIt
                        </a>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Item className={props.navGroup == "home" ? "active" : false}>
                                <Link href="/">
                                    <a className="nav-link">
                                        Home
                                        {props.navGroup == "home" ?
                                            <span className="sr-only">(current)</span> :
                                            false
                                        }
                                    </a>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className={props.navGroup == "about" ? "active" : false}>
                                <Link href="/about">
                                    <a className="nav-link">
                                        About
                                        {props.navGroup == "about" ?
                                            <span className="sr-only">(current)</span> :
                                            false
                                        }
                                    </a>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className={props.navGroup == "download" ? "active" : false}>
                                <Link href="/download">
                                    <a className="nav-link">
                                        Download
                                        {props.navGroup == "download" ?
                                            <span className="sr-only">(current)</span> :
                                            false
                                        }
                                    </a>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className={props.navGroup == "iOS" ? "active" : false}>
                                <Link href="/iOS">
                                    <a className="nav-link">
                                        iOS
                                        {props.navGroup == "iOS" ?
                                            <span className="sr-only">(current)</span> :
                                            false
                                        }
                                    </a>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className={props.navGroup == "jailbreak" ? "active" : false}>
                                <Link href="/jailbreak">
                                    <a className="nav-link">
                                        Jailbreaks
                                        {props.navGroup == "jailbreak" ?
                                            <span className="sr-only">(current)</span> :
                                            false
                                        }
                                    </a>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className={props.navGroup == "device" ? "active" : false}>
                                <Link href="/device">
                                    <a className="nav-link">
                                        Devices
                                        {props.navGroup == "device" ?
                                            <span className="sr-only">(current)</span> :
                                            false
                                        }
                                    </a>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className={props.navGroup == "baseband" ? "active" : false}>
                                <Link href="/baseband">
                                    <a className="nav-link">
                                        Baseband
                                        {props.navGroup == "baseband" ?
                                            <span className="sr-only">(current)</span> :
                                            false
                                        }
                                    </a>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className={props.navGroup == "processor" ? "active" : false}>
                                <Link href="/processor">
                                    <a className="nav-link">
                                        Processors
                                        {props.navGroup == "processor" ?
                                            <span className="sr-only">(current)</span> :
                                            false
                                        }
                                    </a>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className={props.navGroup == "key" ? "active" : false}>
                                <Link href="/key">
                                    <a className="nav-link">
                                        Firmware Keys
                                        {props.navGroup == "key" ?
                                            <span className="sr-only">(current)</span> :
                                            false
                                        }
                                    </a>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className={props.navGroup == "file" ? "active" : false}>
                                <Link href="/file">
                                    <a className="nav-link">
                                        Firmware Files
                                        {props.navGroup == "file" ?
                                            <span className="sr-only">(current)</span> :
                                            false
                                        }
                                    </a>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className={props.navGroup == "fs" ? "active" : false}>
                                <Link href="/fs">
                                    <a className="nav-link">
                                        Filesystem Browser
                                        {props.navGroup == "fs" ?
                                            <span className="sr-only">(current)</span> :
                                            false
                                        }
                                    </a>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className={props.navGroup == "decrypt" ? "active" : false}>
                                <Link href="/decrypt">
                                    <a className="nav-link">
                                        Decrypt Firmware
                                        {props.navGroup == "decrypt" ?
                                            <span className="sr-only">(current)</span> :
                                            false
                                        }
                                    </a>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className={props.navGroup == "ota" ? "active" : false}>
                                <Link href="/ota">
                                    <a className="nav-link">
                                        OTA Updates
                                        {props.navGroup == "ota" ?
                                            <span className="sr-only">(current)</span> :
                                            false
                                        }
                                    </a>
                                </Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            {props.children}
            <hr />
            <footer>
                <Container className="small-print">
                    <p>
                        <Link href="/contact"><a>Contact</a></Link>
                    </p>
                    <p>
                        Website copyright &copy; Cole Johnson 2020.
                        <br />
                        Apple, AirPods, Apple Pencil, Apple TV, Apple Watch, HomePod, iPad, iPad mini, iPad Pro, iPhone, iPod touch, and Siri Remote are registered trademarks of Apple Inc.
                        Any other product names, logos, and brands of property of their respective owners.
                    </p>
                    <p>
                        Firmware keys provided by contributors of <a href="https://theiphonewiki.com" className="external">The iPhone Wiki</a>.
                    </p>
                </Container>
            </footer>
        </>
    );
};
