"use client";
import { useCallback } from "react";
import { Particles } from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";

const StarParticle = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            className="z-0"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                "autoPlay": true,
                "background": {
                    "color": {
                        "value": "#000000"
                    },
                    "image": "",
                    "position": "",
                    "repeat": "",
                    "size": "",
                    "opacity": 1
                },
                "backgroundMask": {
                    "composite": "destination-out",
                    "cover": {
                        "color": {
                            "value": "#fff"
                        },
                        "opacity": 1
                    },
                    "enable": false
                },
                "clear": true,
                "defaultThemes": {},
                "delay": 0,
                "fullScreen": {
                    "enable": true,
                    "zIndex": -1
                },
                "detectRetina": true,
                "duration": 0,
                "fpsLimit": 120,
                "interactivity": {
                    "detectsOn": "window",
                    "events": {
                        "onClick": {
                            "enable": false,
                            "mode": []
                        },
                        "onDiv": {
                            "selectors": [],
                            "enable": false,
                            "mode": [],
                            "type": "circle"
                        },
                        "onHover": {
                            "enable": false,
                            "mode": [],
                            "parallax": {
                                "enable": false,
                                "force": 2,
                                "smooth": 10
                            }
                        },
                        "resize": {
                            "delay": 0.5,
                            "enable": true
                        }
                    },
                    "modes": {
                        "trail": {
                            "delay": 1,
                            "pauseOnStop": false,
                            "quantity": 1
                        },
                        "attract": {
                            "distance": 200,
                            "duration": 0.4,
                            "easing": "ease-out-quad",
                            "factor": 1,
                            "maxSpeed": 50,
                            "speed": 1
                        },
                        "bounce": {
                            "distance": 200
                        },
                        "bubble": {
                            "distance": 200,
                            "duration": 0.4,
                            "mix": false,
                            "divs": {
                                "distance": 200,
                                "duration": 0.4,
                                "mix": false,
                                "selectors": []
                            }
                        },
                        "connect": {
                            "distance": 80,
                            "links": {
                                "opacity": 0.5
                            },
                            "radius": 60
                        },
                        "grab": {
                            "distance": 100,
                            "links": {
                                "blink": false,
                                "consent": false,
                                "opacity": 1
                            }
                        },
                        "push": {
                            "default": true,
                            "groups": [],
                            "quantity": 4
                        },
                        "remove": {
                            "quantity": 2
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4,
                            "factor": 100,
                            "speed": 1,
                            "maxSpeed": 50,
                            "easing": "ease-out-quad",
                            "divs": {
                                "distance": 200,
                                "duration": 0.4,
                                "factor": 100,
                                "speed": 1,
                                "maxSpeed": 50,
                                "easing": "ease-out-quad",
                                "selectors": []
                            }
                        },
                        "slow": {
                            "factor": 3,
                            "radius": 200
                        },
                        "light": {
                            "area": {
                                "gradient": {
                                    "start": {
                                        "value": "#ffffff"
                                    },
                                    "stop": {
                                        "value": "#000000"
                                    }
                                },
                                "radius": 1000
                            },
                            "shadow": {
                                "color": {
                                    "value": "#000000"
                                },
                                "length": 2000
                            }
                        }
                    }
                },
                "manualParticles": [],
                "particles": {
                    "bounce": {
                        "horizontal": {
                            "value": 1
                        },
                        "vertical": {
                            "value": 1
                        }
                    },
                    "collisions": {
                        "absorb": {
                            "speed": 2
                        },
                        "bounce": {
                            "horizontal": {
                                "value": 1
                            },
                            "vertical": {
                                "value": 1
                            }
                        },
                        "enable": false,
                        "maxSpeed": 50,
                        "mode": "bounce",
                        "overlap": {
                            "enable": true,
                            "retries": 0
                        }
                    },
                    "color": {
                        "value": "#ffffff",
                        "animation": {
                            "h": {
                                "count": 0,
                                "enable": false,
                                "speed": 1,
                                "decay": 0,
                                "delay": 0,
                                "sync": true,
                                "offset": 0
                            },
                            "s": {
                                "count": 0,
                                "enable": false,
                                "speed": 1,
                                "decay": 0,
                                "delay": 0,
                                "sync": true,
                                "offset": 0
                            },
                            "l": {
                                "count": 0,
                                "enable": false,
                                "speed": 1,
                                "decay": 0,
                                "delay": 0,
                                "sync": true,
                                "offset": 0
                            }
                        }
                    },
                    "effect": {
                        "close": true,
                        "fill": true,
                        "options": {},
                        "type": []
                    },
                    "groups": {
                        "z5000": {
                            "number": {
                                "value": 70
                            },
                            "zIndex": {
                                "value": 50
                            }
                        },
                        "z7500": {
                            "number": {
                                "value": 30
                            },
                            "zIndex": {
                                "value": 75
                            }
                        },
                        "z2500": {
                            "number": {
                                "value": 50
                            },
                            "zIndex": {
                                "value": 25
                            }
                        },
                        "z1000": {
                            "number": {
                                "value": 40
                            },
                            "zIndex": {
                                "value": 10
                            }
                        }
                    },
                    "move": {
                        "angle": {
                            "offset": 0,
                            "value": 10
                        },
                        "attract": {
                            "distance": 200,
                            "enable": false,
                            "rotate": {
                                "x": 3000,
                                "y": 3000
                            }
                        },
                        "center": {
                            "x": 50,
                            "y": 50,
                            "mode": "percent",
                            "radius": 0
                        },
                        "decay": 0,
                        "distance": {},
                        "direction": "right",
                        "drift": 0,
                        "enable": true,
                        "gravity": {
                            "acceleration": 9.81,
                            "enable": false,
                            "inverse": false,
                            "maxSpeed": 50
                        },
                        "path": {
                            "clamp": true,
                            "delay": {
                                "value": 0
                            },
                            "enable": false,
                            "options": {}
                        },
                        "outModes": {
                            "default": "out",
                            "bottom": "out",
                            "left": "out",
                            "right": "out",
                            "top": "out"
                        },
                        "random": false,
                        "size": false,
                        "speed": 5,
                        "spin": {
                            "acceleration": 0,
                            "enable": false
                        },
                        "straight": false,
                        "trail": {
                            "enable": false,
                            "length": 10,
                            "fill": {}
                        },
                        "vibrate": false,
                        "warp": false
                    },
                    "number": {
                        "density": {
                            "enable": false,
                            "width": 1920,
                            "height": 1080
                        },
                        "limit": {
                            "mode": "delete",
                            "value": 0
                        },
                        "value": 200
                    },
                    "opacity": {
                        "value": 1,
                        "animation": {
                            "count": 0,
                            "enable": false,
                            "speed": 2,
                            "decay": 0,
                            "delay": 0,
                            "sync": true,
                            "offset": 0
                        }
                    },
                    "rotate": {
                        "value": 0,
                        "animation": {
                            "count": 0,
                            "enable": false,
                            "speed": 15,
                            "decay": 0,
                            "delay": 0,
                            "sync": true,
                            "offset": 0
                        }
                    },
                    "shape": {
                        "type": "circle",
                        "options": {
                            "polygon": {
                                "sides": 5
                            }
                        }
                    },
                    "size": {
                        "value": 3,
                        "animation": {
                            "count": 0,
                            "enable": false,
                            "speed": 5,
                            "decay": 0,
                            "delay": 0,
                            "sync": true,
                            "offset": 0
                        }
                    },
                    "stroke": {
                        "width": 0,
                        "color": {
                            "value": "#000000"
                        },
                        "opacity": 1
                    },
                    "collisions": {
                        "enable": true,
                        "mode": "bounce",
                        "speed": 1
                    }
                },
                "style": {},
                "themes": []
            }}
        />
    );
}

export default StarParticle;
